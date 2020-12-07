import React from 'react';

import { EventModel } from 'src/api/models/event.model';

import styles from './styles.module.scss';
import EventsCardsSection from 'src/components/Sections/EventCardsSection';
import Section from 'src/components/Sections/Section';
import Text from 'src/components/Text';

interface IProps {
  likedEvents: EventModel[];
}

const LikedEventsByUser: React.FC<IProps> = ({ likedEvents }) => {
  return (
    <div className={styles.root}>
      <Section>
        <Text color="black" fontSize="3.375rem" textTransform="uppercase" fontFamily="League Gothic">
          Liked events
        </Text>
        <EventsCardsSection events={likedEvents} withLoadMore={false} />
      </Section>
    </div>
  );
};

export default LikedEventsByUser;
