import { View } from 'react-native';
import { timelineStyles } from './styles';
import { TTimelinePoint } from './types';

export const TimelinePoint: React.FC<TTimelinePoint> = ({
  style,
  isLast,
  ...props
}) => {
  return (
    <View
      testID="timeline-point-container"
      style={timelineStyles.pointContainer}
    >
      {!isLast && <View testID="timeline-line" style={timelineStyles.line} />}
      <View
        testID="timeline-point"
        style={[timelineStyles.point, style]}
        {...props}
      />
    </View>
  );
};
