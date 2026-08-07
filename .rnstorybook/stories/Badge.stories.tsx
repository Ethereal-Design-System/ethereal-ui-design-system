import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Badge } from '../../src/components/Badge';

const BadgeMeta: Meta<typeof Badge> = {
  title: 'Content/Badge',
  tags: ['autodocs'],
  component: Badge,
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          padding: 20,
          backgroundColor: '#FFFFFF',
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default BadgeMeta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: 'React',
    variant: 'olive',
  },
};
