import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { MedicalRecord } from './entities/medical-record.entity';

@Injectable()
export class MedicalRecordsService {
  private readonly logger = new Logger(MedicalRecordsService.name);

  constructor(
    @InjectRepository(MedicalRecord)
    private medicalRecordsRepository: Repository<MedicalRecord>,
    private dataSource: DataSource,
  ) {}

  async findAll(): Promise<MedicalRecord[]> {
    try {
      // Primeiro, vamos verificar se a tabela existe
      const tableExists = await this.checkTableExists();
      
      if (!tableExists) {
        this.logger.error('A tabela medical_records não existe no banco de dados');
        throw new InternalServerErrorException('Erro de configuração do banco de dados');
      }

      const records = await this.medicalRecordsRepository.find();
      
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
} 