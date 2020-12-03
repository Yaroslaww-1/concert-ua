import React from 'react';

import { EventModel } from 'src/api/models/event.model';
import EventCard from 'src/components/EventCard';
import CardsSection from '../CardsSection';

interface IProps {
  header?: string;
  events: EventModel[];
  withLoadMore?: boolean;
  onLoadMore?: () => void;
}

const EventCardsSection: React.FC<IProps> = ({
  header = undefined,
  events,
  withLoadMore = true,
  onLoadMore = () => {},
}) => {
  return (
    <CardsSection header={header} withLoadMore={withLoadMore} onLoadMore={onLoadMore}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </CardsSection>
  );
};

export default EventCardsSection;
