import React from 'react';
import { TimelineRoot } from './Root';
import { TimelineItem } from './Item';
import { TimelinePoint } from './Point';
import { TimelineContent } from './Content';
import { TimelineTitle } from './Title';
import { TimelineDescription } from './Description';
import { TimelineSubDescription } from './SubDescription';
import { TTimelineComposed } from './types';

export const TimelineComposed: React.FC<TTimelineComposed> = ({
  checkpoints,
}) => {
  return (
    <TimelineRoot>
      {checkpoints.map((checkpoint, index) => {
        const isLast = index === checkpoints.length - 1;

        return (
          <TimelineItem key={checkpoint.id} isLast={isLast}>
            <TimelinePoint isLast={isLast} />
            <TimelineContent>
              <TimelineTitle>{checkpoint.title}</TimelineTitle>
              {checkpoint.description && (
                <TimelineDescription>
                  {checkpoint.description}
                </TimelineDescription>
              )}
              {checkpoint.subDescription && (
                <TimelineSubDescription>
                  {checkpoint.subDescription}
                </TimelineSubDescription>
              )}
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </TimelineRoot>
  );
};
