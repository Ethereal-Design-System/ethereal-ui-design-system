import { render, screen } from '@testing-library/react-native';
import { Field } from '../components/Field';

const labelText = 'Label';
const messageText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

describe('Field', () => {
  it('Message deve exibir uma mensagem em tela', () => {
    render(<Field.Message>{messageText}</Field.Message>);

    expect(screen.getByText(messageText)).toBeOnTheScreen();
  });

  it('Message deve exibir uma mensagem de erro em tela', () => {
    render(<Field.Message hasError>{messageText}</Field.Message>);

    expect(screen.getByText(messageText)).toHaveProp('aria-invalid', true);
  });

  it('Deve renderizar todas as suas composições', () => {
    render(
      <Field.Root>
        <Field.Label>{labelText}</Field.Label>
        <Field.Message>{messageText}</Field.Message>
      </Field.Root>,
    );

    expect(screen.getByTestId('field-root')).toBeOnTheScreen();
    expect(screen.getByText(labelText)).toBeOnTheScreen();
    expect(screen.getByText(messageText)).toBeOnTheScreen();
  });
});
