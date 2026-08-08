import { View } from 'react-native';
import { timelineStyles } from './styles';
import { TimelineItemProps } from './types';

export const TimelineItem: React.FC<TimelineItemProps> = ({
  style,
  isLast,
  children,
  ...props
}) => {
  return (
    <View
      testID="timeline-item"
      style={[timelineStyles.item, style]}
      {...props}
    >
      {children}
    </View>
  );
};
