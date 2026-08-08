import { ViewProps } from 'react-native';

export interface TimelineItemProps extends ViewProps {
  isLast?: boolean;
}

export type TTimelineCheckpoint = {
  id: string;
  title: string;
  description?: string;
  subDescription?: string;
};

export type TTimelineComposed = {
  checkpoints: TTimelineCheckpoint[];
};

export type TTimelinePoint = ViewProps & {
  isLast?: boolean;
};
