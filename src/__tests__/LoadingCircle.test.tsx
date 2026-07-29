import { render, screen } from '@testing-library/react-native';
import { LoadingCircle } from '@/components/LoadingCircle';
import '@testing-library/jest-dom';

describe('LoadingCircle', () => {
  it('Deve ser exibido na tela', () => {
    render(<LoadingCircle variant="olive" testID="loading-circle" />);
    const component = screen.getByTestId('loading-circle');

    expect(component).toBeOnTheScreen();
  });

  it('Deve respeitar o tamanho customizado passado via props', () => {
    render(<LoadingCircle size={80} />);

    const loadingCircleSvg = screen.getByTestId('loading-circle-svg');
    expect(loadingCircleSvg.props.width).toBe(80);
  });
});
