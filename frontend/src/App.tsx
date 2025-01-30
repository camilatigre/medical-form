import React, { useState } from 'react';
import {FormData} from './types/FormData';
import MedicalForm from './components/MedicalForm';

function App() {
  const [formData, setFormData] = useState<FormData>({
    userId: 0,
    name: '',
    medicalRecord: '',
    address: '',
    healthCardNumber: null,
    age: null,
    companion: null,
    drugAllergies: false,
    medicalHistory: null,
    mainComplaint: null,
    fatherName: null,
    motherName: null,
    birthDate: '',
    weight: null,
    height: null,
    headCircumference: null,
    bloodPressure: null,
    heartRate: null,
    respiratoryRate: null,
    temperature: null,
    oxygenSaturation: null,
    bloodGlucose: null,
    painScale: '',
    diabetes: false,
    hypertension: false,
    professionalAllergies: null,
    phone: null,
    riskClassification: '',
    identificationNumber: null,
    appointmentDate: '',
    receptionTime: '',
    gender: '',
    identity: null,
    addressComplement: null,
    receptionistName: null,
    diagnosticHypothesis: null,
    zipCode: null,
    ethnicity: null,
    cpf: '',
    fetalHeartRate: null,
    gestationalWeeks: null,
    birthCertificate: null,
    placeOfBirth: null,
    maritalStatus: null,
    occupation: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.group('Medical Form Submission');
    console.log('Personal Information:');
    console.table({
      name: formData.name,
      birthDate: formData.birthDate,
      age: formData.age,
      gender: formData.gender,
      cpf: formData.cpf,
      healthCardNumber: formData.healthCardNumber,
      phone: formData.phone
    });

    console.log('\nAddress Information:');
    console.table({
      address: formData.address,
      addressComplement: formData.addressComplement,
      zipCode: formData.zipCode
    });

    console.log('\nVital Signs:');
    console.table({
      weight: formData.weight,
      height: formData.height,
      temperature: formData.temperature,
      bloodPressure: formData.bloodPressure,
      heartRate: formData.heartRate,
      respiratoryRate: formData.respiratoryRate,
      oxygenSaturation: formData.oxygenSaturation,
      bloodGlucose: formData.bloodGlucose
    });

    console.log('\nMedical Conditions:');
    console.table({
      diabetes: formData.diabetes,
      hypertension: formData.hypertension,
      drugAllergies: formData.drugAllergies,
      professionalAllergies: formData.professionalAllergies
    });

    console.log('\nClinical Assessment:');
    console.table({
      mainComplaint: formData.mainComplaint,
      medicalHistory: formData.medicalHistory,
      riskClassification: formData.riskClassification,
      diagnosticHypothesis: formData.diagnosticHypothesis
    });

    console.log('\nComplete Form Data:', formData);
    console.groupEnd();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const finalValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
                      type === 'number' ? Number(value) : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: finalValue
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Formulário de Admissão Médica</h1>
          <p className="text-gray-600">Por favor, preencha todos os campos obrigatórios</p>
        </div>

        <MedicalForm 
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;