export class CreateMedicalRecordDto {
  userId: number;
  name: string;
  medicalRecord: string;
  address?: string;
  healthCardNumber?: string;
  age?: number;
  companion?: string;
  drugAllergies: boolean;
  medicalHistory?: string;
  mainComplaint?: string;
  fatherName?: string;
  motherName?: string;
  birthDate?: Date;
  weight?: number;
  height?: number;
  headCircumference?: number;
  bloodPressure?: string;
  heartRate?: number;
  respiratoryRate?: number;
  temperature?: number;
  oxygenSaturation?: number;
  bloodGlucose?: number;
  painScale?: string;
  diabetes: boolean;
  hypertension: boolean;
  professionalAllergies?: string;
  phone?: string;
  riskClassification?: string;
  identificationNumber?: string;
  appointmentDate?: Date;
  receptionTime?: string;
  gender?: string;
  identity?: string;
  addressComplement?: string;
  receptionistName?: string;
  diagnosticHypothesis?: string;
  zipCode?: string;
  ethnicity?: string;
  cpf?: string;
  fetalHeartRate?: number;
  gestationalWeeks?: number;
  birthCertificate?: string;
  placeOfBirth?: string;
  maritalStatus?: string;
  occupation?: string;
}
