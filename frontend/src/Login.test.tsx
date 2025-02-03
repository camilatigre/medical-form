import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';
import { jest } from '@jest/globals';

const renderLogin = () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};


const mockFetch = jest.fn().mockImplementation(
  () => Promise.resolve({
    ok: true,
    json: () => Promise.resolve({})
  } as Response)
);
global.fetch = mockFetch as typeof global.fetch;

test('deve realizar login com sucesso e salvar dados na sessão', async () => {
  const mockUserData = {
    access_token: 'token123',
    user: {
      id: 1,
      name: 'Usuário Teste',
      email: 'teste@exemplo.com',
      role: 'user'
    }
  };

  mockFetch.mockImplementationOnce(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockUserData)
  } as Response));

  renderLogin();

  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'teste@exemplo.com' }
  });
  fireEvent.change(screen.getByLabelText('Senha'), {
    target: { value: 'senha123' }
  });
  fireEvent.click(screen.getByRole('button'));

  await waitFor(() => {
    expect(sessionStorage.getItem('access_token')).toBe('token123');
    expect(sessionStorage.getItem('user_id')).toBe('1');
    expect(sessionStorage.getItem('user_name')).toBe('Usuário Teste');
    expect(mockFetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          email: 'teste@exemplo.com',
          password: 'senha123'
        })
      })
    );
  });
});
