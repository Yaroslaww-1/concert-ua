import React from 'react';
import { EventModel } from 'src/api/models/event.model';

import styles from './styles.module.scss';
import BuyTicket from '../BuyTicket';
import Text from 'src/components/Text';
import LikeIcon from 'src/components/Icons/LikeIcon';
import Artist from '../Artist';
import { useScroll } from 'src/common/hooks/use-scroll';
import WysiwygText from 'src/components/WysiwygText';
import Section from 'src/components/Sections/Section';

interface IProps {
  event: EventModel;
}

const EventDescriptionSection: React.FC<IProps> = ({ event }) => {
  const { descriptionHTML } = event;

  const [executeScroll, artistElementRef] = useScroll();

  return (
    <div className={styles.root}>
      <div className={styles.navbarRoot}>
        <div className={styles.navbarContent}>
          <Text
            color="black"
            fontSize="1rem"
            textTransform="uppercase"
            classes={{ root: styles.navbarLink }}
            onClick={executeScroll}
          >
            Artist
          </Text>
        </div>
      </div>
      <div className={styles.contentRoot}>
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
            <WysiwygText html={descriptionHTML} />
          </div>
          <Artist artist={event.artist} ref={artistElementRef} />
        </div>
        <div className={styles.buyTicketWrapper}>
          <BuyTicket event={event} onBuy={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default EventDescriptionSection;
