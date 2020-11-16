import React from 'react';

import { EventModel } from 'src/api/models/event.model';
import EventCardsSection from 'src/components/Sections/EventCardsSection';

export interface IProps {
  events: EventModel[];
}

const PopularEventsSection: React.FC<IProps> = ({ events }) => {
  const MAX_EVENTS_IN_SECTION = 4;
  return (
    <EventCardsSection
      events={events.slice(0, MAX_EVENTS_IN_SECTION)}
      withLoadMore={false}
      header="Popular events"
    ></EventCardsSection>
  );
};

export default PopularEventsSection;
