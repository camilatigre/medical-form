import { render, screen } from '@testing-library/react';
import { SubmitButton } from './SubmitButton';

describe('SubmitButton', () => {
  it('deve renderizar o botão no estado normal', () => {
    render(<SubmitButton isLoading={false} />);
    
    const button = screen.getByRole('button');
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Entrar');
    expect(button).not.toBeDisabled();
    expect(button).toHaveClass('bg-violet-600');
  });

  it('deve renderizar o botão no estado de carregamento', () => {
    render(<SubmitButton isLoading={true} />);
    
    const button = screen.getByRole('button');
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Entrando...');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('bg-violet-400');
    expect(button).toHaveClass('cursor-not-allowed');
  });
});