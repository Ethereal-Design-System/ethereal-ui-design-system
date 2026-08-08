import { View, ViewProps } from 'react-native';
import { timelineStyles } from './styles';

export const TimelineRoot: React.FC<ViewProps> = ({ style, ...props }) => {
  return (
    <View
      testID="timeline-root"
      style={[timelineStyles.root, style]}
      {...props}
    />
  );
};
