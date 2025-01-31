import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {FormData} from './types/FormData';
import MedicalForm from './components/MedicalForm';

function Form() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Adicionar estado para controlar o loadin

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
    
    try {
      const token = sessionStorage.getItem('access_token');
      const url = id 
        ? `https://medical-form-api.onrender.com/medical-records/${id}`
        : `https://medical-form-api.onrender.com/medical-records`;
      
      const response = await fetch(url, {
        method: id ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erro ao salvar prontuário');
      }

      navigate('/dashboard');
      
    } catch (error) {
      console.error('Erro ao salvar:', error);
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
    const fetchPatientData = async () => {
      if (id) {
        try {
          const token = sessionStorage.getItem('access_token');
          const response = await fetch(`${process.env.API_URL}/medical-records/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (!response.ok) {
            throw new Error('Erro ao buscar dados do paciente');
          }

          const patientData = await response.json();
          setFormData(prevData => ({
            ...prevData,
            ...patientData,
            birthDate: patientData.birthDate ? patientData.birthDate.split('T')[0] : '',
            appointmentDate: patientData.appointmentDate ? patientData.appointmentDate.split('T')[0] : ''
          }));
        } catch (error) {
          console.error('Erro ao carregar dados do paciente:', error);
        } }
    };

    fetchPatientData();
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