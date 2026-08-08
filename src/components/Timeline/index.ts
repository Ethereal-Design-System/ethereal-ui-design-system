import { TimelineComposed } from './Composed';
import { TimelineContent } from './Content';
import { TimelineDescription } from './Description';
import { TimelineItem } from './Item';
import { TimelinePoint } from './Point';
import { TimelineRoot } from './Root';
import { TimelineSubDescription } from './SubDescription';
import { TimelineTitle } from './Title';

export const Timeline = Object.assign(TimelineComposed, {
  Root: TimelineRoot,
  Item: TimelineItem,
  Point: TimelinePoint,
  Content: TimelineContent,
  Title: TimelineTitle,
  Description: TimelineDescription,
  SubDescription: TimelineSubDescription,
});
