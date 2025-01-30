import React, { useState } from 'react';
import { Save } from 'lucide-react';

interface FormData {
  name: string;
  medicalRecord: string;
  address: string;
  healthCardNumber: string;
  age: number;
  companion: string;
  drugAllergies: boolean;
  medicalHistory: string;
  mainComplaint: string;
  fatherName: string;
  motherName: string;
  birthDate: string;
  weight: number;
  height: number;
  headCircumference: number;
  bloodPressure: string;
  heartRate: number;
  respiratoryRate: number;
  temperature: number;
  oxygenSaturation: number;
  bloodGlucose: number;
  painScale: string;
  diabetes: boolean;
  hypertension: boolean;
  professionalAllergies: string;
  phone: string;
  riskClassification: string;
  identificationNumber: string;
  appointmentDate: string;
  receptionTime: string;
  gender: string;
  identity: string;
  addressComplement: string;
  receptionistName: string;
  diagnosticHypothesis: string;
  zipCode: string;
  ethnicity: string;
  cpf: string;
  fetalHeartRate: number;
  gestationalWeeks: number;
  birthCertificate: string;
  placeOfBirth: string;
  maritalStatus: string;
  occupation: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    medicalRecord: '',
    address: '',
    healthCardNumber: '',
    age: 0,
    companion: '',
    drugAllergies: false,
    medicalHistory: '',
    mainComplaint: '',
    fatherName: '',
    motherName: '',
    birthDate: '',
    weight: 0,
    height: 0,
    headCircumference: 0,
    bloodPressure: '',
    heartRate: 0,
    respiratoryRate: 0,
    temperature: 0,
    oxygenSaturation: 0,
    bloodGlucose: 0,
    painScale: '',
    diabetes: false,
    hypertension: false,
    professionalAllergies: '',
    phone: '',
    riskClassification: '',
    identificationNumber: '',
    appointmentDate: '',
    receptionTime: '',
    gender: '',
    identity: '',
    addressComplement: '',
    receptionistName: '',
    diagnosticHypothesis: '',
    zipCode: '',
    ethnicity: '',
    cpf: '',
    fetalHeartRate: 0,
    gestationalWeeks: 0,
    birthCertificate: '',
    placeOfBirth: '',
    maritalStatus: '',
    occupation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Detailed console logging of form data
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

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Informações Pessoais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                  CPF
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="healthCardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Número do Cartão do SUS
                </label>
                <input
                  type="text"
                  id="healthCardNumber"
                  name="healthCardNumber"
                  value={formData.healthCardNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </section>

          {/* Address */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Endereço</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Endereço
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="addressComplement" className="block text-sm font-medium text-gray-700 mb-1">
                  Complemento
                </label>
                <input
                  type="text"
                  id="addressComplement"
                  name="addressComplement"
                  value={formData.addressComplement}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                  CEP
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </section>

          {/* Clinical Data */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Dados Clínicos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                  Peso (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight || ''}
                  onChange={handleChange}
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                  Altura (m)
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height || ''}
                  onChange={handleChange}
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 mb-1">
                  Temperatura (°C)
                </label>
                <input
                  type="number"
                  id="temperature"
                  name="temperature"
                  value={formData.temperature || ''}
                  onChange={handleChange}
                  step="0.1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="bloodPressure" className="block text-sm font-medium text-gray-700 mb-1">
                  Pressão Arterial
                </label>
                <input
                  type="text"
                  id="bloodPressure"
                  name="bloodPressure"
                  value={formData.bloodPressure}
                  onChange={handleChange}
                  placeholder="Ex: 120/80"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="heartRate" className="block text-sm font-medium text-gray-700 mb-1">
                  Frequência Cardíaca
                </label>
                <input
                  type="number"
                  id="heartRate"
                  name="heartRate"
                  value={formData.heartRate || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="oxygenSaturation" className="block text-sm font-medium text-gray-700 mb-1">
                  Saturação de Oxigênio (%)
                </label>
                <input
                  type="number"
                  id="oxygenSaturation"
                  name="oxygenSaturation"
                  value={formData.oxygenSaturation || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="mainComplaint" className="block text-sm font-medium text-gray-700 mb-1">
                  Queixa Principal
                </label>
                <textarea
                  id="mainComplaint"
                  name="mainComplaint"
                  value={formData.mainComplaint}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700 mb-1">
                  Histórico Médico
                </label>
                <textarea
                  id="medicalHistory"
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="diabetes"
                  name="diabetes"
                  checked={formData.diabetes}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="diabetes" className="ml-2 block text-sm text-gray-900">
                  Diabetes
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hypertension"
                  name="hypertension"
                  checked={formData.hypertension}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="hypertension" className="ml-2 block text-sm text-gray-900">
                  Hipertensão
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="drugAllergies"
                  name="drugAllergies"
                  checked={formData.drugAllergies}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="drugAllergies" className="ml-2 block text-sm text-gray-900">
                  Alergias a Medicamentos
                </label>
              </div>
            </div>
          </section>

          {/* Classification and Care */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Classificação e Atendimento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="riskClassification" className="block text-sm font-medium text-gray-700 mb-1">
                  Classificação de Risco
                </label>
                <select
                  id="riskClassification"
                  name="riskClassification"
                  value={formData.riskClassification}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="red">Vermelho</option>
                  <option value="orange">Laranja</option>
                  <option value="yellow">Amarelo</option>
                  <option value="green">Verde</option>
                  <option value="blue">Azul</option>
                </select>
              </div>

              <div>
                <label htmlFor="receptionistName" className="block text-sm font-medium text-gray-700 mb-1">
                  Profissional Responsável
                </label>
                <input
                  type="text"
                  id="receptionistName"
                  name="receptionistName"
                  value={formData.receptionistName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </section>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Save size={20} />
              Salvar Formulário
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;