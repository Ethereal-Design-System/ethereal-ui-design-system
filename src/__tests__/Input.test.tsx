import { render, screen, userEvent } from '@testing-library/react-native';
import { Input } from '../components/Input';

const inputTestId = 'input';

describe('Input', () => {
  it('Deve estar desabilitado', () => {
    render(<Input editable={false} />);
    expect(screen.getByTestId(inputTestId)).toBeDisabled();
  });

  it('Deve sinalizar que ocorreu uma falha ao preencher o campo', () => {
    render(<Input hasError={true} />);
    expect(screen.getByTestId(inputTestId)).toHaveProp('aria-invalid', true);
  });

  it('Deve permitir que o usuário digite um texto', async () => {
    render(<Input />);

    const userEmail = 'email@email.com';
    await userEvent.type(screen.getByTestId(inputTestId), userEmail);

    expect(screen.getByTestId(inputTestId)).toHaveDisplayValue(userEmail);
  });
});
