import { Injectable, Logger, InternalServerErrorException, ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { MedicalRecord } from './entities/medical-record.entity';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';

@Injectable()
export class MedicalRecordsService {
  private readonly logger = new Logger(MedicalRecordsService.name);

  constructor(
    @InjectRepository(MedicalRecord)
    private medicalRecordsRepository: Repository<MedicalRecord>,
    private dataSource: DataSource,
  ) {}

  async findAll(user: any): Promise<MedicalRecord[]> {
    try {
      
      // Verifica se o usuário está autenticado
      if (!user) {
        throw new UnauthorizedException('Usuário não autenticado');
      }

      const tableExists = await this.checkTableExists();
      
      if (!tableExists) {
        this.logger.error('A tabela medical_records não existe no banco de dados');
        throw new InternalServerErrorException('Erro de configuração do banco de dados');
      }

      // Busca apenas os registros relacionados ao usuário autenticado
      const records = await this.medicalRecordsRepository.find({
        where: { userId: user.sub }
      });
      
      if (!records || records.length === 0) {
        this.logger.debug('Nenhum registro médico encontrado');
        return [];
      }
      
      return records;
    } catch (error) {
      this.logger.error(`Erro ao buscar registros médicos: ${error.message}`, error.stack);
      throw error;
    }
  }

  private async checkTableExists(): Promise<boolean> {
    try {
      const result = await this.dataSource.query(`
        SELECT EXISTS (
          SELECT 1 
          FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'medical_records'
        );
      `);
      return result[0].exists;
    } catch (error) {
      this.logger.error(`Erro ao verificar existência da tabela: ${error.message}`);
      throw new InternalServerErrorException('Erro na conexão com o banco de dados');
    }
  }

  async create(createMedicalRecordDto: CreateMedicalRecordDto, user: any): Promise<MedicalRecord> {
    try {
      // Verifica se o usuário está autenticado
      if (!user) {
        throw new UnauthorizedException('Usuário não autenticado');
      }

      // Associa o registro ao usuário autenticado
      createMedicalRecordDto.userId = user.sub;

      // Verifica se o usuário existe
      const userExists = await this.dataSource.query(
        'SELECT EXISTS(SELECT 1 FROM users WHERE id = $1)',
        [createMedicalRecordDto.userId]
      );

      if (!userExists[0].exists) {
        throw new NotFoundException(`Usuário com ID ${createMedicalRecordDto.userId} não encontrado`);
      }

      // Verifica se já existe um registro com o mesmo medicalRecord ou CPF
      if (createMedicalRecordDto.medicalRecord) {
        const existingRecord = await this.medicalRecordsRepository.findOne({
          where: [
            { medicalRecord: createMedicalRecordDto.medicalRecord },
            { cpf: createMedicalRecordDto.cpf }
          ]
        });

        if (existingRecord) {
          throw new ConflictException('Já existe um registro médico com este número ou CPF');
        }
      }

      const newMedicalRecord = this.medicalRecordsRepository.create(createMedicalRecordDto);
      const savedRecord = await this.medicalRecordsRepository.save(newMedicalRecord);
      
      this.logger.log(`Registro médico criado com sucesso. ID: ${savedRecord.id}`);
      return savedRecord;
    } catch (error) {
      this.logger.error(`Erro ao criar registro médico: ${error.message}`, error.stack);
      throw error;
    }
  }

  async findOne(patientId: number, user: any): Promise<MedicalRecord> {
    const record = await this.medicalRecordsRepository.findOne({
      where: { id: patientId, userId: user.userId }
    });
    
    if (!record) {
      throw new NotFoundException(`Prontuário com ID ${patientId} não encontrado`);
    }
    
    return record;
  }

  async update(
    id: number,
    updateMedicalRecordDto: UpdateMedicalRecordDto,
    user: any
  ): Promise<MedicalRecord> {
    // Primeiro verifica se o registro existe e pertence ao usuário
    const record = await this.medicalRecordsRepository.findOne({
      where: { id: id, userId: user.userId }
    });

    if (!record) {
      throw new NotFoundException(`Prontuário com ID ${id} não encontrado`);
    }

    // Atualiza o registro com os novos dados
    const updatedRecord = {
      ...record,
      ...updateMedicalRecordDto,
      updatedAt: new Date()
    };

    return this.medicalRecordsRepository.save(updatedRecord);
  }
} 