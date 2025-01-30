import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { MedicalRecordsService } from './medical-records.service';
import { MedicalRecord } from './entities/medical-record.entity';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';

@Controller('medical-records')
@UseGuards(JwtAuthGuard)
export class MedicalRecordsController {
  constructor(private readonly medicalRecordsService: MedicalRecordsService) {}

  @Get()
  findAll(@Request() req): Promise<MedicalRecord[]> {
    return this.medicalRecordsService.findAll(req.user);
  }

  @Post()
  create(@Body() createMedicalRecordDto: CreateMedicalRecordDto, @Request() req): Promise<MedicalRecord> {
    return this.medicalRecordsService.create(createMedicalRecordDto, req.user);
  }
} 