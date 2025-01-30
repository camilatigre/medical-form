import React from 'react';
import { FormData } from '../../types/FormData';

interface SectionProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const ClassificationSection: React.FC<SectionProps> = ({ formData, handleChange }) => {
  return (
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
          >
            <option value="">Selecione...</option>
            <option value="Emergência">Emergência</option>
            <option value="Muito Urgente">Muito Urgente</option>
            <option value="Pouco Urgente">Pouco Urgente</option>
            <option value="Não Urgente">Não Urgente</option>
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
            value={formData.receptionistName || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ClassificationSection; 