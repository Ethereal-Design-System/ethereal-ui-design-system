import { render, screen } from '@testing-library/react-native';
import { Badge } from '../components/Badge';

describe('Badge', () => {
  it('deve ser exibido em tela', () => {
    render(<Badge label="Badge" />);

    expect(screen.getByText('Badge')).toBeOnTheScreen();
  });
});
