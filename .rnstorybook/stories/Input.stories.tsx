import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Field } from '../../src/components/Field';
import { Input } from '../../src/components/Input';
import { IInput } from '../../src/components/Input/types';

const InputMeta: Meta<typeof Input> = {
  title: 'Field/Input',
  tags: ['autodocs'],
  component: Input,
  argTypes: {
    hasError: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
    editable: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
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
  render: (args) => <Input {...args} />,
  args: { editable: true, placeholder: 'Insira um valor...' },
};

export default InputMeta;

type Story = StoryObj<IInput>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    value: '000.000.00',
    editable: false,
  },
};

export const WithError: Story = {
  args: {
    value: 'email@email.com',
    hasError: true,
  },
};

export const Composed: Story = {
  render: ({ hasError, ...args }) => (
    <Field.Root>
      <Field.Label>Email:</Field.Label>
      <Input placeholder="Insira o seu email" hasError={hasError} {...args} />
      {hasError && <Field.Message hasError>Email inválido</Field.Message>}
    </Field.Root>
  ),
};
