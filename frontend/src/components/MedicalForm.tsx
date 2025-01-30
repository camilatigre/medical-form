import React from 'react';
import { Save } from 'lucide-react';
import PersonalInformation from './sections/PersonalInformation';
import AddressSection from './sections/AddressSection';
import ClinicalData from './sections/ClinicalData';
import ClassificationSection from './sections/ClassificationSection';
import { FormData } from '../types/FormData';

interface MedicalFormProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const MedicalForm: React.FC<MedicalFormProps> = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <PersonalInformation formData={formData} handleChange={handleChange} />
      <AddressSection formData={formData} handleChange={handleChange} />
      <ClinicalData formData={formData} handleChange={handleChange} />
      <ClassificationSection formData={formData} handleChange={handleChange} />

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
  );
};

export default MedicalForm;