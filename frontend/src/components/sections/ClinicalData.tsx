import React from 'react';
import { FormData } from '../../types/FormData';

interface SectionProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const ClinicalData: React.FC<SectionProps> = ({ formData, handleChange }) => {
  return (
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
      </div>
    </section>
  );
};

export default ClinicalData; 