import { render, screen } from '@testing-library/react-native';
import { Timeline } from '../components/Timeline';

describe('Timeline', () => {
  it('Point deve ser exibido em tela', () => {
    render(<Timeline.Point />);

    expect(screen.getByTestId('timeline-line')).toBeOnTheScreen();
    expect(screen.getByTestId('timeline-point')).toBeOnTheScreen();
  });

  it('Title deve ser exibido em tela', () => {
    render(<Timeline.Title>Title</Timeline.Title>);

    expect(screen.getByText('Title')).toBeOnTheScreen();
  });

  it('SubDescription deve ser exibido em tela', () => {
    render(<Timeline.SubDescription>SubDescription</Timeline.SubDescription>);

    expect(screen.getByText('SubDescription')).toBeOnTheScreen();
  });

  it('A TimelineItem deve ser renderizada com título e subdescrição', () => {
    render(
      <Timeline.Item>
        <Timeline.Title>Title</Timeline.Title>
        <Timeline.SubDescription>SubDescription</Timeline.SubDescription>
      </Timeline.Item>,
    );

    expect(screen.getByTestId('timeline-item')).toBeOnTheScreen();
    expect(screen.getByText('Title')).toBeOnTheScreen();
    expect(screen.getByText('SubDescription')).toBeOnTheScreen();
  });

  it('A Timeline deve renderizar 3 checkpoints com título, descrição e subdescrição', () => {
    render(
      <Timeline
        checkpoints={[
          {
            id: '1',
            title: 'Title 1',
            description: 'Description 1',
            subDescription: 'SubDescription 1',
          },
          {
            id: '2',
            title: 'Title 2',
            description: 'Description 2',
            subDescription: 'SubDescription 2',
          },
          {
            id: '3',
            title: 'Title 3',
            description: 'Description 3',
            subDescription: 'SubDescription 3',
          },
        ]}
      />,
    );

    expect(screen.getAllByTestId('timeline-point')).toHaveLength(3);
    expect(screen.getAllByTestId('timeline-line')).toHaveLength(2);
    expect(screen.getByText('Title 1')).toBeOnTheScreen();
    expect(screen.getByText('Description 1')).toBeOnTheScreen();
    expect(screen.getByText('SubDescription 1')).toBeOnTheScreen();

    expect(screen.getByText('Title 2')).toBeOnTheScreen();
    expect(screen.getByText('Description 2')).toBeOnTheScreen();
    expect(screen.getByText('SubDescription 2')).toBeOnTheScreen();

    expect(screen.getByText('Title 3')).toBeOnTheScreen();
    expect(screen.getByText('Description 3')).toBeOnTheScreen();
    expect(screen.getByText('SubDescription 3')).toBeOnTheScreen();
  });
});
