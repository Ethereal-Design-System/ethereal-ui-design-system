import { Text, TextProps } from 'react-native';
import { timelineStyles } from './styles';

export const TimelineDescription: React.FC<TextProps> = ({
  style,
  ...props
}) => {
  return (
    <Text
      testID="timeline-description"
      style={[timelineStyles.description, style]}
      {...props}
    />
  );
};
