import { Controller, Get, Logger, HttpException, InternalServerErrorException } from '@nestjs/common';
import { MedicalRecordsService } from './medical-records.service';
import { MedicalRecord } from './entities/medical-record.entity';

@Controller('medical-records')
export class MedicalRecordsController {
  private readonly logger = new Logger(MedicalRecordsController.name);

  constructor(private readonly medicalRecordsService: MedicalRecordsService) {}

  @Get()
  async findAll(): Promise<MedicalRecord[]> {
    try {
      return await this.medicalRecordsService.findAll();
    } catch (error) {
      this.logger.error(`Erro no endpoint findAll: ${error.message}`);
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Erro interno do servidor');
    }
  }
} 