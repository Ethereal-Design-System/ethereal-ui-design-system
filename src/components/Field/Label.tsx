import { Text, TextProps } from 'react-native';
import { fieldStyles } from './styles';

export const FieldLabel: React.FC<TextProps> = ({ style, ...props }) => {
  return (
    <Text style={[fieldStyles.text, fieldStyles.label, style]} {...props} />
  );
};
