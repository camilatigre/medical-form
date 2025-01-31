import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('medical_records')
export class MedicalRecord {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ nullable: false })
  name: string;

  @Column({ name: 'medical_record', unique: true })
  medicalRecord: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ name: 'health_card_number', nullable: true })
  healthCardNumber: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  companion: string;

  @Column({ name: 'drug_allergies', default: false })
  drugAllergies: boolean;

  @Column({ name: 'medical_history', type: 'text', nullable: true })
  medicalHistory: string;

  @Column({ name: 'main_complaint', type: 'text', nullable: true })
  mainComplaint: string;

  @Column({ name: 'father_name', nullable: true })
  fatherName: string;

  @Column({ name: 'mother_name', nullable: true })
  motherName: string;

  @Column({ name: 'birth_date', type: 'date', nullable: true })
  birthDate: Date;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  weight: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  height: number;

  @Column({
    name: 'head_circumference',
    type: 'decimal',
    precision: 5,
    scale: 2,
    nullable: true,
  })
  headCircumference: number;

  @Column({ name: 'blood_pressure', nullable: true })
  bloodPressure: string;

  @Column({ name: 'heart_rate', nullable: true })
  heartRate: number;

  @Column({ name: 'respiratory_rate', nullable: true })
  respiratoryRate: number;

  @Column({ type: 'decimal', precision: 4, scale: 2, nullable: true })
  temperature: number;

  @Column({
    name: 'oxygen_saturation',
    type: 'decimal',
    precision: 5,
    scale: 2,
    nullable: true,
  })
  oxygenSaturation: number;

  @Column({
    name: 'blood_glucose',
    type: 'decimal',
    precision: 5,
    scale: 2,
    nullable: true,
  })
  bloodGlucose: number;

  @Column({ name: 'pain_scale', nullable: true })
  painScale: string;

  @Column({ default: false })
  diabetes: boolean;

  @Column({ default: false })
  hypertension: boolean;

  @Column({ name: 'professional_allergies', nullable: true })
  professionalAllergies: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ name: 'risk_classification', nullable: true })
  riskClassification: string;

  @Column({ name: 'identification_number', nullable: true })
  identificationNumber: string;

  @Column({ name: 'appointment_date', type: 'date', nullable: true })
  appointmentDate: Date;

  @Column({ name: 'reception_time', type: 'time', nullable: true })
  receptionTime: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  identity: string;

  @Column({ name: 'address_complement', type: 'text', nullable: true })
  addressComplement: string;

  @Column({ name: 'receptionist_name', nullable: true })
  receptionistName: string;

  @Column({ name: 'diagnostic_hypothesis', type: 'text', nullable: true })
  diagnosticHypothesis: string;

  @Column({ name: 'zip_code', nullable: true })
  zipCode: string;

  @Column({ nullable: true })
  ethnicity: string;

  @Column({ unique: true, nullable: true })
  cpf: string;

  @Column({ name: 'fetal_heart_rate', nullable: true })
  fetalHeartRate: number;

  @Column({ name: 'gestational_weeks', nullable: true })
  gestationalWeeks: number;

  @Column({ name: 'birth_certificate', nullable: true })
  birthCertificate: string;

  @Column({ name: 'place_of_birth', nullable: true })
  placeOfBirth: string;

  @Column({ name: 'marital_status', nullable: true })
  maritalStatus: string;

  @Column({ nullable: true })
  occupation: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
