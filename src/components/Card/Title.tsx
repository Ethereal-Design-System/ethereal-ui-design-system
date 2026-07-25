import { TextProps, Text } from 'react-native';
import { cardStyles } from './styles';

export const CardTitle: React.FC<TextProps> = ({
  style,
  accessibilityRole = 'text',
  ...props
}) => (
  <Text
    style={[style, cardStyles.title]}
    accessibilityRole={accessibilityRole}
    {...props}
  />
);
