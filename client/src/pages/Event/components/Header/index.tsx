import React from 'react';

import styles from './styles.module.scss';
import EventIcon from '@material-ui/icons/Event';
import PlaceIcon from '@material-ui/icons/Place';
import PersonIcon from '@material-ui/icons/Person';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Text from 'src/components/Text';
import { formatDate, getTime } from 'src/common/date/date.helper';
import { EventModel } from 'src/api/models/event.model';
import { style } from '@material-ui/system';
import ColoredButton from 'src/components/Buttons/ColoredButton';

export interface IProps {
  event: EventModel;
}

const Header: React.FC<IProps> = ({ event: { date, imageUrl, place, tags, promoter, price, hot } }) => {
  const getDateText = () => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = formatDate(date, options);
    return formattedDate;
  };

  const getTimeText = () => getTime(date);

  return (
    <div className={styles.root}>
      <div className={styles.imageRoot} style={{ backgroundImage: `url(${imageUrl}` }}>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <div className={styles.tag} key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buyTicketRoot}>
        <div className={styles.buyTicketHeader}>
          <EventIcon />
          <div className={styles.date}>
            <Text textAlign="left" fontSize="1.25rem" fontWeight={700}>
              {getDateText()}
            </Text>
            <Text textAlign="left">{getTimeText()}</Text>
          </div>
        </div>
        <div className={styles.buyTicketContent}>
          <div className={styles.place}>
            <PlaceIcon />
            <div className={styles.placeText}>
              <Text color="black" lineHeight={1} textTransform="capitalize">
                {place.name}
              </Text>
              <Text color="black" lineHeight={1} textTransform="capitalize">
                {place.address}
              </Text>
            </div>
          </div>
          <div className={styles.promoter}>
            <PersonIcon />
            <Text color="black" textTransform="capitalize">
              {promoter}
            </Text>
          </div>
          <div className={styles.price}>
            <LocalOfferIcon />
            <Text color="black" fontWeight={800}>
              {price}
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
      <div className={styles.nav}></div>
    </div>
  );
};

export default Header;
