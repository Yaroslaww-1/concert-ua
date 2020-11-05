import React from 'react';
import { EventModel } from 'src/api/models/event.model';

import styles from './styles.module.scss';
import EventsCardsSection from 'src/components/Sections/EventCardsSection';

const NewEventsSection: React.FC = () => {
  const event: EventModel = {
    id: 'string',
    name: 'stringstringstringstringstring',
    description: 'string',
    place: 'string',
    date: 'string',
    imageUrl: 'https://storage.concert.ua/Jnt/15/jj/5f8807e64ec54/eca7.jpg:31-mainpage-megabanner-desktop',
    price: '100$',
  };
  return (
    <EventsCardsSection
      events={[event, event, event, event, event, event, event, event]}
      header={'New events'}
      onLoadMore={() => {}}
    />
  );
};

export default NewEventsSection;
