import { Text, TextProps } from 'react-native';
import { timelineStyles } from './styles';

export const TimelineTitle: React.FC<TextProps> = ({ style, ...props }) => {
  return (
    <Text
      testID="timeline-title"
      style={[timelineStyles.title, style]}
      {...props}
    />
  );
};
