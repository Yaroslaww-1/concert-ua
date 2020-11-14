import React from 'react';
import { EventModel } from 'src/api/models/event.model';

import styles from './styles.module.scss';
import BuyTicket from '../BuyTicket';
import Text from 'src/components/Text';

interface IProps {
  event: EventModel;
}

const EventDescriptionSection: React.FC<IProps> = ({ event }) => {
  const { descriptionHTML } = event;
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.description}>
          <Text color="black" textAlign="left" fontSize="3rem" fontWeight={800}>
            About
          </Text>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: `${descriptionHTML}${descriptionHTML}` }}
          ></div>
        </div>
        <div className={styles.artist}></div>
      </div>
      <div className={styles.buyTicketWrapper}>
        <BuyTicket event={event} onBuy={() => {}} />
      </div>
    </div>
  );
};

export default EventDescriptionSection;
