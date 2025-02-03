import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginFormInput } from './LoginFormInput';
import { jest } from '@jest/globals';

describe('LoginFormInput', () => {
  const mockProps = {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Endereço de Email',
    value: '',
    onChange: jest.fn(),
  };

  it('deve renderizar o input com label corretamente', () => {
    render(<LoginFormInput {...mockProps} />);
    
    const labelElement = screen.getByText('Endereço de Email');
    const inputElement = screen.getByRole('textbox');
    
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'email');
    expect(inputElement).toHaveAttribute('name', 'email');
    expect(inputElement).toHaveAttribute('id', 'email');
  });

  it('deve chamar onChange quando o valor do input é alterado', () => {
    render(<LoginFormInput {...mockProps} />);
    
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'teste@email.com' } });
    
    expect(mockProps.onChange).toHaveBeenCalled();
  });

  it('deve exibir o valor passado via props', () => {
    const propsComValor = {
      ...mockProps,
      value: 'teste@email.com'
    };

    render(<LoginFormInput {...propsComValor} />);
    
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue('teste@email.com');
  });
}); 