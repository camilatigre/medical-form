import { Controller, Get, Post, Put, Delete, Body, UseGuards, Request, Param, NotFoundException } from '@nestjs/common';
import { MedicalRecordsService } from './medical-records.service';
import { MedicalRecord } from './entities/medical-record.entity';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';

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

  @Get(':patientId')
  async findOne(@Param('patientId') patientId: string, @Request() req): Promise<MedicalRecord> {
    const record = await this.medicalRecordsService.findOne(parseInt(patientId), req.user);
    if (!record) {
      throw new NotFoundException('Prontuário não encontrado');
    }
    return record;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMedicalRecordDto: UpdateMedicalRecordDto,
    @Request() req
  ): Promise<MedicalRecord> {
    const record = await this.medicalRecordsService.update(
      parseInt(id),
      updateMedicalRecordDto,
      req.user
    );
    if (!record) {
      throw new NotFoundException('Prontuário não encontrado');
    }
    return record;
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req): Promise<void> {
    const record = await this.medicalRecordsService.remove(parseInt(id), req.user);
    if (!record) {
      throw new NotFoundException('Prontuário não encontrado');
    }
  }
} 