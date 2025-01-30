import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface Patient {
  id: number;
  name: string;
  cpf: string;
  createdAt: string;
}

const PatientList = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInput, setPageInput] = useState('1');
  const itemsPerPage = 5;

  // Dados mocados para exemplo
  const patients: Patient[] = [
    {
      id: 1,
      name: "Maria Silva Santos",
      cpf: "123.456.789-00",
      createdAt: "2024-03-20"
    },
    {
      id: 2,
      name: "João Pedro Oliveira",
      cpf: "987.654.321-00",
      createdAt: "2024-03-19"
    },
    {
      id: 3,
      name: "Ana Carolina Lima",
      cpf: "456.789.123-00",
      createdAt: "2024-03-18"
    },
    {
      id: 4,
      name: "Carlos Eduardo Souza",
      cpf: "789.123.456-00",
      createdAt: "2024-03-17"
    },
    {
      id: 5,
      name: "Beatriz Ferreira Costa",
      cpf: "321.654.987-00",
      createdAt: "2024-03-16"
    },
    {
      id: 6,
      name: "Ricardo Mendes Silva",
      cpf: "111.222.333-44",
      createdAt: "2024-03-15"
    },
    {
      id: 7,
      name: "Patricia Oliveira Santos",
      cpf: "555.666.777-88",
      createdAt: "2024-03-14"
    },
    {
      id: 8,
      name: "Fernando Costa Lima",
      cpf: "999.888.777-66",
      createdAt: "2024-03-13"
    },
    {
      id: 9,
      name: "Mariana Santos Pereira",
      cpf: "444.555.666-77",
      createdAt: "2024-03-12"
    },
    {
      id: 10,
      name: "Lucas Almeida Souza",
      cpf: "222.333.444-55",
      createdAt: "2024-03-11"
    }
  ];

  // Lógica de paginação
  const totalPages = Math.ceil(patients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPatients = patients.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setPageInput(page.toString());
    }
  };

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageInput(e.target.value);
  };

  const handlePageInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pageNumber = parseInt(pageInput);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    } else {
      setPageInput(currentPage.toString());
    }
  };

  const handleEdit = (patientId: number) => {
    // Mock de dados completos do paciente
    const mockPatientData = {
      userId: patientId,
      name: "Maria Silva Santos",
      medicalRecord: "12345",
      address: "Rua das Flores, 123",
      healthCardNumber: "987654321",
      age: 35,
      companion: "João Silva",
      drugAllergies: true,
      medicalHistory: "Hipertensão",
      mainComplaint: "Dor de cabeça",
      fatherName: "José Silva",
      motherName: "Ana Santos",
      birthDate: "1989-05-15",
      weight: 65,
      height: 165,
      headCircumference: 56,
      bloodPressure: "120/80",
      heartRate: 75,
      respiratoryRate: 16,
      temperature: 36.5,
      oxygenSaturation: 98,
      bloodGlucose: 95,
      painScale: "3",
      diabetes: false,
      hypertension: true,
      professionalAllergies: "Nenhuma",
      phone: "11999999999",
      riskClassification: "Baixo",
      identificationNumber: "123456789",
      appointmentDate: "2024-03-20",
      receptionTime: "14:30",
      gender: "F",
      identity: "12345678-9",
      addressComplement: "Apto 101",
      receptionistName: "Carlos Silva",
      diagnosticHypothesis: "Enxaqueca",
      zipCode: "12345-678",
      ethnicity: "Branca",
      cpf: "123.456.789-00",
      fetalHeartRate: null,
      gestationalWeeks: null,
      birthCertificate: null,
      placeOfBirth: "São Paulo",
      maritalStatus: "Casada",
      occupation: "Professora"
    };

    // Navega para o formulário com os dados mockados
    navigate(`/form/${patientId}`, { state: { formData: mockPatientData } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Fichas Cadastradas</h1>
          <p className="text-gray-600">Lista de pacientes registrados no sistema</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CPF
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data de Cadastro
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{patient.cpf}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {new Date(patient.createdAt).toLocaleDateString('pt-BR')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button 
                      onClick={() => handleEdit(patient.id)}
                      className="text-violet-600 hover:text-violet-900"
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Paginação */}
          <div className="mt-4 flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
              >
                ←
              </button>

              {/* Números das páginas */}
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded ${
                      currentPage === page
                        ? 'bg-violet-600 text-white'
                        : 'border border-gray-300'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
              >
                →
              </button>
            </div>

            {/* Input para digitar a página */}
            <form onSubmit={handlePageInputSubmit} className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Ir para página:</span>
              <input
                type="number"
                min="1"
                max={totalPages}
                value={pageInput}
                onChange={handlePageInputChange}
                className="w-16 px-2 py-1 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-violet-600 text-white rounded hover:bg-violet-700"
              >
                Ir
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientList; 