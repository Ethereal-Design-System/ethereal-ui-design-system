import { Card } from '@/components/Card';
import { CardRoot } from '@/components/Card/Root';
import { render, screen } from '@testing-library/react-native';

const titleText = 'Título';
const paragraphText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium ut urna quis elementum.';

describe('Card', () => {
  it('Title deve ser exibido em tela', () => {
    render(<Card.Title>{titleText}</Card.Title>);

    expect(screen.getByText(titleText)).toBeOnTheScreen();
  });

  it('Paragraph deve ser exibido em tela', () => {
    render(<Card.Title>{paragraphText}</Card.Title>);

    expect(screen.getByText(paragraphText)).toBeOnTheScreen();
  });

  it('Todas as composições devem ser exibidas em conjunto em tela', () => {
    render(
      <CardRoot>
        <Card.Title>{titleText}</Card.Title>
        <Card.Paragraph>{paragraphText}</Card.Paragraph>
      </CardRoot>,
    );
  });
});
