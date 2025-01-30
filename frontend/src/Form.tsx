import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {FormData} from './types/FormData';
import MedicalForm from './components/MedicalForm';
import { useParams } from 'react-router-dom';

function Form() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Obter dados do usuário do sessionStorage
  const userName = sessionStorage.getItem('user_name');
  const userId = sessionStorage.getItem('user_id');

  const [formData, setFormData] = useState<FormData>({
    userId: userId ? parseInt(userId) : null,
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
    receptionistName: userName || null,
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Obter o token do sessionStorage
    const token = sessionStorage.getItem('access_token');

    // Formatar as datas antes de enviar
    const formattedData = {
      ...formData,
      birthDate: formData.birthDate ? new Date(formData.birthDate).toISOString().split('T')[0] : null,
      appointmentDate: formData.appointmentDate ? new Date(formData.appointmentDate).toISOString().split('T')[0] : null
    };
    
    try {
      const response = await fetch('http://localhost:3000/medical-records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(formattedData)
      });

      if (!response.ok) {
        throw new Error('Erro ao salvar o formulário');
      }

      const data = await response.json();
      console.log('Formulário salvo com sucesso:', data);
      
      // Redireciona para o dashboard após sucesso
      navigate('/dashboard');
      
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      // Aqui você pode adicionar uma notificação de erro para o usuário
    } finally {
      setIsSubmitting(false);
    }
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

  useEffect(() => {
    if (id) {
      console.log(id);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Formulário de Admissão Médica</h1>
          <p className="text-gray-600">Por favor, preencha todos os campos obrigatórios</p>
        </div>

        <MedicalForm 
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
}

export default Form;