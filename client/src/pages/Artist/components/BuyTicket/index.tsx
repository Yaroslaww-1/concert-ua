import React from 'react';
import { EventModel } from 'src/api/models/event.model';
import { getWeekdayName } from 'src/common/date/date.helper';

import styles from './styles.module.scss';

import Text from 'src/components/Text';
import PlaceIcon from '@material-ui/icons/Place';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ColoredButton from 'src/components/Buttons/ColoredButton';
import Link from 'src/components/Link';
import { redirectToEvent } from 'src/common/url/redirect-to-event-by-id';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type IProps = {
  event: EventModel;
} & RouteComponentProps;

const BuyTicket: React.FC<IProps> = ({ event, history }) => {
  const getDateNumber = () => `${event.date.getDate()}/${event.date.getMonth() + 1}`;

  return (
    <div className={styles.root}>
      <div className={styles.date}>
        <Text color="black" fontSize="3.75rem" fontFamily="League Gothic" lineHeight={1} textTransform="uppercase">
          {getDateNumber()}
        </Text>
        <Text color="gray" fontSize="1.625rem" fontFamily="League Gothic" lineHeight={1} textTransform="uppercase">
          {getWeekdayName(event.date)}
        </Text>
      </div>
      <div className={styles.place}>
        <Text color="black" fontSize="2rem" fontFamily="League Gothic" lineHeight={1.1875} textTransform="uppercase">
          {event.artist.name}
        </Text>
        <div className={styles.withIcon}>
          <PlaceIcon />
          <Text color="black" fontSize="1rem" fontFamily="Roboto" lineHeight={1.375} textTransform="capitalize">
            {event.place.address}
          </Text>
        </div>
        <div className={styles.withIcon}>
          <LocalOfferIcon />
          <Text
            color="black"
            fontSize="1rem"
            fontFamily="Roboto"
            fontWeight={700}
            lineHeight={1.1875}
            textTransform="capitalize"
          >
            {event.price}
          </Text>
        </div>
      </div>
      <div className={styles.buyTicket}>
        <ColoredButton
          text="Buy ticket"
          onClick={() => {}}
          variant="green"
          classes={{ root: styles.buyTicketButton }}
        />
        <Link text="About" onClick={() => redirectToEvent(history, event.id)} />
      </div>
    </div>
  );
};

export default withRouter(BuyTicket);
