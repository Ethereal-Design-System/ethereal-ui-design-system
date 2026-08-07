import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Timeline } from '../../src/components/Timeline';
import { TTimelineCheckpoint } from '../../src/components/Timeline/types';

const TimelineMeta: Meta<typeof Timeline> = {
  title: 'Content/Timeline',
  tags: ['autodocs'],
  component: Timeline,
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: 'flex-start',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default TimelineMeta;

type Story = StoryObj<typeof Timeline>;

const checkpointsWithAllFields: TTimelineCheckpoint[] = [
  {
    id: '1',
    title: 'Order Placed',
    description: 'We have received your order.',
    subDescription: '10:00 AM',
  },
  {
    id: '2',
    title: 'Processing',
    description: 'Your order is currently being processed.',
    subDescription: '11:30 AM',
  },
  {
    id: '3',
    title: 'Shipped',
    description: 'Your order is on the way.',
    subDescription: '02:00 PM',
  },
  {
    id: '4',
    title: 'Delivered',
    description: 'Your order has been delivered.',
    subDescription: '05:45 PM',
  },
];

const checkpointsWithTitleOnly: TTimelineCheckpoint[] = [
  { id: '1', title: 'Step One' },
  { id: '2', title: 'Step Two' },
  { id: '3', title: 'Step Three' },
];

const checkpointsWithTitleAndDescription: TTimelineCheckpoint[] = [
  {
    id: '1',
    title: 'Account Created',
    description: 'Your account was successfully created.',
  },
  {
    id: '2',
    title: 'Email Verified',
    description: 'Your email address has been confirmed.',
  },
  {
    id: '3',
    title: 'Profile Complete',
    description: 'You have filled in all required profile information.',
  },
];

export const Default: Story = {
  args: {
    checkpoints: checkpointsWithAllFields,
  },
};

export const WithTitleOnly: Story = {
  args: {
    checkpoints: checkpointsWithTitleOnly,
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    checkpoints: checkpointsWithTitleAndDescription,
  },
};

export const SingleItem: Story = {
  args: {
    checkpoints: [
      {
        id: '1',
        title: 'Unique Step',
        description: 'This is the only step in this timeline.',
        subDescription: '08:00 AM',
      },
    ],
  },
};

export const LongTimeline: Story = {
  args: {
    checkpoints: [
      {
        id: '1',
        title: 'Kick-off',
        description: 'Project officially started.',
        subDescription: 'Jan 01',
      },
      {
        id: '2',
        title: 'Discovery',
        description: 'Requirements gathered and documented.',
        subDescription: 'Jan 15',
      },
      {
        id: '3',
        title: 'Design',
        description: 'Wireframes and prototypes approved.',
        subDescription: 'Feb 01',
      },
      {
        id: '4',
        title: 'Development',
        description: 'Core features implemented.',
        subDescription: 'Mar 10',
      },
      {
        id: '5',
        title: 'QA & Testing',
        description: 'All test cases passed successfully.',
        subDescription: 'Apr 05',
      },
      {
        id: '6',
        title: 'Staging Deploy',
        description: 'Released to staging environment.',
        subDescription: 'Apr 20',
      },
      {
        id: '7',
        title: 'Production',
        description: 'Application is live for users.',
        subDescription: 'May 01',
      },
    ],
  },
};

export const ComposedWithAllFields: Story = {
  render: () => (
    <Timeline.Root>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>First Step</Timeline.Title>
          <Timeline.Description>
            This step was completed successfully.
          </Timeline.Description>
          <Timeline.SubDescription>09:00 AM</Timeline.SubDescription>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>Second Step</Timeline.Title>
          <Timeline.Description>Currently in progress.</Timeline.Description>
          <Timeline.SubDescription>10:30 AM</Timeline.SubDescription>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item isLast>
        <Timeline.Point isLast />
        <Timeline.Content>
          <Timeline.Title>Final Step</Timeline.Title>
          <Timeline.Description>Pending execution.</Timeline.Description>
          <Timeline.SubDescription>12:00 PM</Timeline.SubDescription>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  ),
};

export const ComposedWithTitleOnly: Story = {
  render: () => (
    <Timeline.Root>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>Step One</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>Step Two</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item isLast>
        <Timeline.Point isLast />
        <Timeline.Content>
          <Timeline.Title>Step Three</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  ),
};

export const ComposedWithTitleAndDescription: Story = {
  render: () => (
    <Timeline.Root>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>Account Created</Timeline.Title>
          <Timeline.Description>
            Your account was successfully created.
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>Email Verified</Timeline.Title>
          <Timeline.Description>
            Your email address has been confirmed.
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item isLast>
        <Timeline.Point isLast />
        <Timeline.Content>
          <Timeline.Title>Profile Complete</Timeline.Title>
          <Timeline.Description>
            All required profile information has been filled in.
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  ),
};

export const ComposedSingleItem: Story = {
  render: () => (
    <Timeline.Root>
      <Timeline.Item isLast>
        <Timeline.Point isLast />
        <Timeline.Content>
          <Timeline.Title>Unique Step</Timeline.Title>
          <Timeline.Description>
            This is the only step in this timeline.
          </Timeline.Description>
          <Timeline.SubDescription>08:00 AM</Timeline.SubDescription>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  ),
};
