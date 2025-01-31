import React from 'react';
import { Save } from 'lucide-react';
import { FormData } from '../types/FormData';

interface MedicalFormProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting?: boolean;
}

const MedicalForm: React.FC<MedicalFormProps> = ({ formData, handleChange, handleSubmit, isSubmitting = false }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Informações Pessoais */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Informações Pessoais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              value={formData.cpf || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="identity" className="block text-sm font-medium text-gray-700 mb-1">
              RG
            </label>
            <input
              type="text"
              id="identity"
              name="identity"
              value={formData.identity || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              value={formData.birthDate || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Idade
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
              Gênero
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Selecione</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
              <option value="O">Outro</option>
            </select>
          </div>

          <div>
            <label htmlFor="ethnicity" className="block text-sm font-medium text-gray-700 mb-1">
              Etnia
            </label>
            <input
              type="text"
              id="ethnicity"
              name="ethnicity"
              value={formData.ethnicity || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700 mb-1">
              Estado Civil
            </label>
            <input
              type="text"
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">
              Ocupação
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={formData.occupation || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700 mb-1">
              Nome do Pai
            </label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="motherName" className="block text-sm font-medium text-gray-700 mb-1">
              Nome da Mãe
            </label>
            <input
              type="text"
              id="motherName"
              name="motherName"
              value={formData.motherName || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Documentação */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Documentação</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="medicalRecord" className="block text-sm font-medium text-gray-700 mb-1">
              Prontuário*
            </label>
            <input
              type="text"
              id="medicalRecord"
              name="medicalRecord"
              required
              value={formData.medicalRecord}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="healthCardNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Cartão do SUS
            </label>
            <input
              type="text"
              id="healthCardNumber"
              name="healthCardNumber"
              value={formData.healthCardNumber || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="identificationNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Número de Identificação
            </label>
            <input
              type="text"
              id="identificationNumber"
              name="identificationNumber"
              value={formData.identificationNumber || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="birthCertificate" className="block text-sm font-medium text-gray-700 mb-1">
              Certidão de Nascimento
            </label>
            <input
              type="text"
              id="birthCertificate"
              name="birthCertificate"
              value={formData.birthCertificate || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="placeOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
              Local de Nascimento
            </label>
            <input
              type="text"
              id="placeOfBirth"
              name="placeOfBirth"
              value={formData.placeOfBirth || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Endereço */}
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
              value={formData.address || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              value={formData.addressComplement || ''}
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
              value={formData.zipCode || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Dados Clínicos */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Dados Clínicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
              Peso (kg)
            </label>
            <input
              type="number"
              step="0.01"
              id="weight"
              name="weight"
              value={formData.weight || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
              Altura (m)
            </label>
            <input
              type="number"
              step="0.01"
              id="height"
              name="height"
              value={formData.height || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="headCircumference" className="block text-sm font-medium text-gray-700 mb-1">
              Perímetro Cefálico (cm)
            </label>
            <input
              type="number"
              step="0.1"
              id="headCircumference"
              name="headCircumference"
              value={formData.headCircumference || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 mb-1">
              Temperatura (°C)
            </label>
            <input
              type="number"
              step="0.1"
              id="temperature"
              name="temperature"
              value={formData.temperature || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              value={formData.bloodPressure || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
            />
          </div>

          <div>
            <label htmlFor="respiratoryRate" className="block text-sm font-medium text-gray-700 mb-1">
              Frequência Respiratória
            </label>
            <input
              type="number"
              id="respiratoryRate"
              name="respiratoryRate"
              value={formData.respiratoryRate || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="oxygenSaturation" className="block text-sm font-medium text-gray-700 mb-1">
              Saturação de Oxigênio (%)
            </label>
            <input
              type="number"
              step="0.1"
              id="oxygenSaturation"
              name="oxygenSaturation"
              value={formData.oxygenSaturation || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="bloodGlucose" className="block text-sm font-medium text-gray-700 mb-1">
              Glicemia
            </label>
            <input
              type="number"
              step="0.1"
              id="bloodGlucose"
              name="bloodGlucose"
              value={formData.bloodGlucose || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="painScale" className="block text-sm font-medium text-gray-700 mb-1">
              Escala de Dor
            </label>
            <input
              type="text"
              id="painScale"
              name="painScale"
              value={formData.painScale || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="fetalHeartRate" className="block text-sm font-medium text-gray-700 mb-1">
              Frequência Cardíaca Fetal
            </label>
            <input
              type="number"
              id="fetalHeartRate"
              name="fetalHeartRate"
              value={formData.fetalHeartRate || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="gestationalWeeks" className="block text-sm font-medium text-gray-700 mb-1">
              Semanas Gestacionais
            </label>
            <input
              type="number"
              id="gestationalWeeks"
              name="gestationalWeeks"
              value={formData.gestationalWeeks || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="mainComplaint" className="block text-sm font-medium text-gray-700 mb-1">
              Queixa Principal
            </label>
            <textarea
              id="mainComplaint"
              name="mainComplaint"
              value={formData.mainComplaint || ''}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700 mb-1">
              Histórico Médico
            </label>
            <textarea
              id="medicalHistory"
              name="medicalHistory"
              value={formData.medicalHistory || ''}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="diagnosticHypothesis" className="block text-sm font-medium text-gray-700 mb-1">
              Hipótese Diagnóstica
            </label>
            <textarea
              id="diagnosticHypothesis"
              name="diagnosticHypothesis"
              value={formData.diagnosticHypothesis || ''}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

        <div>
          <label htmlFor="professionalAllergies" className="block text-sm font-medium text-gray-700 mb-1">
            Alergias Profissionais
          </label>
          <textarea
            id="professionalAllergies"
            name="professionalAllergies"
            value={formData.professionalAllergies || ''}
            onChange={handleChange}
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </section>

      {/* Dados do Atendimento */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Dados do Atendimento</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-1">
              Data da Consulta
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="receptionTime" className="block text-sm font-medium text-gray-700 mb-1">
              Horário de Recepção
            </label>
            <input
              type="time"
              id="receptionTime"
              name="receptionTime"
              value={formData.receptionTime || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="companion" className="block text-sm font-medium text-gray-700 mb-1">
              Acompanhante
            </label>
            <input
              type="text"
              id="companion"
              name="companion"
              value={formData.companion || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="receptionistName" className="block text-sm font-medium text-gray-700 mb-1">
              Nome do Recepcionista
            </label>
            <input
              type="text"
              id="receptionistName"
              name="receptionistName"
              value={formData.receptionistName || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Classificação de Risco */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Classificação de Risco</h2>
        <div>
          <label htmlFor="riskClassification" className="block text-sm font-medium text-gray-700 mb-1">
            Classificação
          </label>
          <select
            id="riskClassification"
            name="riskClassification"
            value={formData.riskClassification || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Selecione</option>
            <option value="Emergência">Emergência</option>
            <option value="Muito Urgente">Muito Urgente</option>
            <option value="Pouco Urgente">Pouco Urgente</option>
            <option value="Não Urgente">Não Urgente</option>
          </select>
        </div>
      </section>

      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2
            ${isSubmitting 
              ? 'bg-blue-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
        >
          <Save size={20} />
          {isSubmitting ? 'Salvando...' : 'Salvar Formulário'}
        </button>
      </div>
    </form>
  );
};

export default MedicalForm;