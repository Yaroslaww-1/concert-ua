import React from 'react';

import styles from './styles.module.scss';
import { EventModel } from 'src/api/models/event.model';
import Section from '../Section';
import EventCard from 'src/components/EventCard';
import TransparentButton from 'src/components/Buttons/TransparentButton';

interface IProps {
  header?: string;
  events: EventModel[];
  onLoadMore: () => void;
}

const CardsSection: React.FC<IProps> = ({ header, events, onLoadMore }) => {
  return (
    <Section
      header={<h1>{header}</h1>}
      classes={{ contentRoot: styles.root }}
      footer={
        <div className={styles.loadMoreButtonWrapper}>
          <TransparentButton onClick={onLoadMore} text={'Load more'} animationType={'growCenter'} color={'red'} />
        </div>
      }
    >
      <div className={styles.eventsWrapper}>
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={{ src: event.imageUrl, altText: 'An event image' }}
            date={event.date}
            name={event.name}
            place={event.place}
            price={event.price}
          />
        ))}
      </div>
    </Section>
  );
};

export default CardsSection;
