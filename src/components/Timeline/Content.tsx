import { View, ViewProps } from 'react-native';
import { timelineStyles } from './styles';

export const TimelineContent: React.FC<ViewProps> = ({ style, ...props }) => {
  return (
    <View
      testID="timeline-content"
      style={[timelineStyles.content, style]}
      {...props}
    />
  );
};
