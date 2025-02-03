import { render, screen } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {
  it('deve renderizar a mensagem de erro corretamente', () => {
    const mensagemTeste = 'Erro de teste';
    
    render(<ErrorMessage message={mensagemTeste} />);
    
    // Verifica se a mensagem está sendo exibida
    expect(screen.getByText(mensagemTeste)).toBeInTheDocument();
    
  });
}); 