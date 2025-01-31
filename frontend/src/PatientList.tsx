import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
  const [patients, setPatients] = useState<Patient[]>([]);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const token = sessionStorage.getItem('access_token');
        const response = await fetch(`https://medical-form-api.onrender.com/medical-records`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Falha ao carregar pacientes');
        }

        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Erro ao buscar pacientes:', error);
        // Aqui você pode adicionar uma notificação de erro para o usuário
      }
    };

    fetchPatients();
  }, []);

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

  const handleEdit = async (patientId: number) => {
    navigate(`/form/${patientId}`);
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