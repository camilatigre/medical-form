
import { LoginFormInput } from './components/LoginForm/LoginFormInput';
import { SubmitButton } from './components/LoginForm/SubmitButton';
import { ErrorMessage } from './components/common/ErrorMessage';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from './constants';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
}


const Login = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${baseUrl}auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Credenciais inválidas');
      }

      const data: LoginResponse = await response.json();
      
      sessionStorage.setItem('access_token', data.access_token);
      sessionStorage.setItem('user_id', data.user.id.toString());
      sessionStorage.setItem('user_name', data.user.name);
      
      navigate('/dashboard');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erro ao fazer login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <ErrorMessage message={error} />}

          <div className="rounded-md shadow-sm space-y-4">
            <LoginFormInput
              id="email"
              name="email"
              type="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <LoginFormInput
              id="password"
              name="password"
              type="password"
              label="Senha"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <SubmitButton isLoading={isLoading} />
        </form>
      </div>
    </div>
  );
};

export default Login;
