import React from 'react';
import { EventModel } from 'src/api/models/event.model';

import styles from './styles.module.scss';
import EventsCardsSection from 'src/components/Sections/EventCardsSection';
import { EventService } from 'src/api/services/event.service';

const NewEventsSection: React.FC = () => {
  const [events, setEvents] = React.useState<EventModel[]>([]);
  React.useEffect(() => {
    EventService.getEvents().then((events) => setEvents(events as EventModel[]));
  }, []);
  return <EventsCardsSection events={[...events, ...events]} header={'New events'} onLoadMore={() => {}} />;
};

export default NewEventsSection;
