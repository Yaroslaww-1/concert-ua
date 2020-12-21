import React from 'react';

import { EventModel } from 'src/api/models/event.model';

import styles from './styles.module.scss';
import EventIcon from '@material-ui/icons/Event';
import PlaceIcon from '@material-ui/icons/Place';
import PersonIcon from '@material-ui/icons/Person';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Text from 'src/components/Text';
import ColoredButton from 'src/components/Buttons/ColoredButton';
import { formatDate, getTime } from 'src/common/date/date.helper';

interface IProps {
  event: EventModel;
  onBuy: () => void;
}

const BuyTicket: React.FC<IProps> = ({ event: { date, place, price, promoter, hot }, onBuy }) => {
  const getDateText = () => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = formatDate(date, options);
    return formattedDate;
  };

  const getTimeText = () => getTime(date);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <EventIcon />
        <div className={styles.date}>
          <Text textAlign="left" fontSize="1.25rem" fontWeight={700}>
            {getDateText()}
          </Text>
          <Text textAlign="left">{getTimeText()}</Text>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.place}>
          <PlaceIcon />
          <div className={styles.placeText}>
            <Text color="black" lineHeight={1} textTransform="capitalize" textAlign="left">
              {place.name}
            </Text>
            <Text color="black" lineHeight={1} textTransform="capitalize" textAlign="left">
              {place.address}
            </Text>
          </div>
        </div>
        <div className={styles.promoter}>
          <PersonIcon />
          <Text color="black" textTransform="capitalize" textAlign="left">
            {promoter}
          </Text>
        </div>
        <div className={styles.price}>
          <LocalOfferIcon />
          <Text color="black" fontWeight={800}>
            {price} UAN
          </Text>
        </div>
        {hot && (
          <div className={styles.hot}>
            <WhatshotIcon />
            <Text color="red" textTransform="capitalize" fontWeight={600}>
              Popular event
            </Text>
          </div>
        )}
        <div className={styles.buyButton}>
          <ColoredButton text="Buy ticket" onClick={() => {}} variant="green" classes={{ root: styles.button }} />
        </div>
      </div>
    </div>
  );
};

export default BuyTicket;
