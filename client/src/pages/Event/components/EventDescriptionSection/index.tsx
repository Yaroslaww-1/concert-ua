import React from 'react';
import { EventModel } from 'src/api/models/event.model';

import styles from './styles.module.scss';
import BuyTicket from '../BuyTicket';
import Text from 'src/components/Text';
import LikeIcon from 'src/components/Icons/LikeIcon';
import Artist from '../Artist';

interface IProps {
  event: EventModel;
}

const EventDescriptionSection: React.FC<IProps> = ({ event }) => {
  const { descriptionHTML } = event;
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Text
            color="black"
            textAlign="left"
            fontSize="4.5rem"
            fontFamily="League Gothic"
            letterSpacing="1px"
            textTransform="uppercase"
          >
            {event.name}
          </Text>
          <LikeIcon onClick={() => {}} classes={{ root: styles.icon }} />
        </div>
        <div className={styles.description}>
          <Text
            color="black"
            textAlign="left"
            fontSize="3rem"
            fontFamily="League Gothic"
            letterSpacing="1.26px"
            textTransform="uppercase"
          >
            About
          </Text>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: `${descriptionHTML}${descriptionHTML}` }}
          ></div>
        </div>
        <Artist artist={event.artist} />
      </div>
      <div className={styles.buyTicketWrapper}>
        <BuyTicket event={event} onBuy={() => {}} />
      </div>
    </div>
  );
};

export default EventDescriptionSection;
