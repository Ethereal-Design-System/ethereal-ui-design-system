import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Card } from '../../src/components/Card';

const CardMeta: Meta<typeof Card.Root> = {
  title: 'Content/Card',
  tags: ['autodocs'],
  component: Card.Root,
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: 'flex-start',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default CardMeta;

type Story = StoryObj<typeof Card.Root>;

export const Title: Story = {
  render: () => <Card.Title>Título do Card</Card.Title>,
};

export const Paragraph: Story = {
  render: () => (
    <Card.Paragraph>
      Este é um parágrafo de exemplo demonstrando a tipografia e o espaçamento
      do componente Card.Paragraph.
    </Card.Paragraph>
  ),
};

export const UnifiedCompositions: Story = {
  render: () => (
    <Card.Root>
      <Card.Title>Composição Unificada testet tet</Card.Title>
      <Card.Paragraph>
        Esta é a composição completa do componente Card, unindo o título e o
        parágrafo dentro da estrutura principal Card.Root.
      </Card.Paragraph>
    </Card.Root>
  ),
};
