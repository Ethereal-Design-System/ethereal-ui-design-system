import { View, ViewProps } from 'react-native';
import { fieldStyles } from './styles';

export const FieldRoot: React.FC<ViewProps> = ({ style, ...props }) => (
  <View testID="field-root" style={[fieldStyles.root, style]} {...props} />
);
