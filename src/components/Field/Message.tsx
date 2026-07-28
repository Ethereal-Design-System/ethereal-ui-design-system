import { Text } from 'react-native';
import { fieldStyles } from './styles';
import { IFieldMessage } from './types';
import { messageVariants } from './variants/messageVariants';

export const FieldMessage: React.FC<IFieldMessage> = ({
  style,
  hasError,
  ...props
}) => {
  const keyByStatus = hasError ? 'error' : 'default';

  return (
    <Text
      style={[
        fieldStyles.text,
        fieldStyles.message,
        messageVariants[keyByStatus],
        style,
      ]}
      aria-invalid={hasError}
      {...props}
    />
  );
};
