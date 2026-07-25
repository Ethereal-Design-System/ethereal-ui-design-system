import { TextProps, Text } from 'react-native';
import { cardStyles } from './styles';

export const CardParagraph: React.FC<TextProps> = ({
  style,
  accessibilityRole = 'text',
  ...props
}) => (
  <Text
    style={[style, cardStyles.paragraph]}
    accessibilityRole={accessibilityRole}
    {...props}
  />
);
