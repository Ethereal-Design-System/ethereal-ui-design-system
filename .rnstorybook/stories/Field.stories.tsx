import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Field } from '../../src/components/Field';

const FieldMeta: Meta<typeof Field.Root> = {
  title: 'Field/Field',
  tags: ['autodocs'],
  component: Field.Root,
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
};

export default FieldMeta;

type Story = StoryObj<typeof Field.Root>;

export const Default: Story = {
  render: () => (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Message>Mensagem</Field.Message>
    </Field.Root>
  ),
};

export const Label: Story = {
  render: () => <Field.Label>Rótulo do Campo</Field.Label>,
};

export const Message: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Field.Message>Mensagem de instrução padrão.</Field.Message>
      <Field.Message hasError>Mensagem de erro.</Field.Message>
    </View>
  ),
};
