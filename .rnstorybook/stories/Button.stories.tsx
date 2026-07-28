import type { Meta, StoryObj } from '@storybook/react-native';
import { View, Alert, Platform } from 'react-native';
import { Button } from '../../src/components/Button';

const ButtonMeta: Meta<typeof Button> = {
  title: 'Action/Button',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'link'],
      description: 'The button variant style',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },

    text: {
      control: { type: 'text' },
      description: 'Define the text content of the button',
    },
  },
  args: {
    text: 'Button',
  },
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: 'flex-start',
          backgroundColor: '#fff',
        }}
      >
        <Story />
      </View>
    ),
  ],
  render: ({ ...args }) => <Button {...args} />,
};

export default ButtonMeta;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    onPress: () =>
      Platform.OS === 'web' ? alert('press') : Alert.alert('press'),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'link',
    disabled: true,
  },
};
