import { Text, TextProps } from 'react-native';
import { timelineStyles } from './styles';

export const TimelineSubDescription: React.FC<TextProps> = ({
  style,
  ...props
}) => {
  return (
    <Text
      testID="sub-description"
      style={[timelineStyles.subDescription, style]}
      {...props}
    />
  );
};
