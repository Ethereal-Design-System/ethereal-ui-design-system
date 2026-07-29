import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { LoadingCircle } from '../../src/components/LoadingCircle';

const LoadingCircleMeta: Meta<typeof LoadingCircle> = {
  title: 'Feedback/LoadingCircle',
  tags: ['autodocs'],
  component: LoadingCircle,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['olive', 'cappuccino'],
      description: 'Variante de cor do indicador de carregamento',
    },
    size: {
      control: { type: 'number' },
      description: 'Tamanho do indicador em pixels',
    },
    strokeWidth: {
      control: { type: 'number' },
      description: 'Espessura da linha em pixels',
    },
    duration: {
      control: { type: 'number' },
      description: 'Duração de uma rotação completa em ms',
    },
  },
  args: {
    variant: 'olive',
    size: 64,
    strokeWidth: 6,
    duration: 1200,
  },
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F9F6F0',
        }}
      >
        <Story />
      </View>
    ),
  ],
  render: ({ ...args }) => <LoadingCircle {...args} />,
};

export default LoadingCircleMeta;

type Story = StoryObj<typeof LoadingCircle>;

export const Olive: Story = {
  args: {
    variant: 'olive',
  },
};

export const cappuccino: Story = {
  args: {
    variant: 'cappuccino',
  },
};

export const BothVariants: Story = {
  render: () => (
    <View style={{ gap: 40, alignItems: 'center' }}>
      <LoadingCircle variant="olive" size={64} />
      <LoadingCircle variant="cappuccino" size={64} />
    </View>
  ),
};
