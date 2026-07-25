import { render, fireEvent, userEvent } from '@testing-library/react-native';
import { Button } from '@/components/Button';
import { IButton } from '@/components/Button/types';

const onPressMock = jest.fn();

describe('<Button />', () => {
  const setup = (props?: IButton) => {
    const utils = render(<Button {...props} text="Botão" />);
    const button = utils.getByText('Botão');
    return { ...utils, button };
  };

  it('Deve ser exibido na tela', () => {
    const { button } = setup();
    expect(button).toBeOnTheScreen();
  });

  it('Deve executar uma função ao ser clicado', async () => {
    const { button } = setup({ onPress: onPressMock });
    const userEventSetup = userEvent.setup();

    await userEventSetup.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('Deve estar desabilitado', () => {
    const { button } = setup({ disabled: true });

    expect(button).toBeDisabled();
  });
});
