import React from 'react';

import styles from './styles.module.scss';
import { EventModel } from 'src/api/models/event.model';
import Section from '../Section';
import EventCard from 'src/components/EventCard';
import TransparentButton from 'src/components/Buttons/TransparentButton';
import Text from 'src/components/Text';

interface IProps {
  header?: string;
  events: EventModel[];
  withLoadMore?: boolean;
  onLoadMore?: () => void;
}

const CardsSection: React.FC<IProps> = ({ header = null, events, withLoadMore = true, onLoadMore = () => {} }) => {
  return (
    <Section
      header={
        header ? (
          <Text
            fontSize="3rem"
            textTransform="uppercase"
            textAlign="left"
            color="black"
            letterSpacing="1px"
            fontFamily="League Gothic"
          >
            {header}
          </Text>
        ) : undefined
      }
      classes={{ contentRoot: styles.root }}
      footer={
        withLoadMore ? (
          <div className={styles.loadMoreButtonWrapper}>
            <TransparentButton onClick={onLoadMore} text={'Load more'} animationType={'growCenter'} color={'red'} />
          </div>
        ) : undefined
      }
    >
      <div className={styles.eventsWrapper}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </Section>
  );
};

export default CardsSection;
