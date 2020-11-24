import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import styles from './styles.module.scss';
import EventCardImageHoverOverlay from '../EventImageComponents/HoverOverlays/EventCardImageHover';
import Text from '../Text';
import { formatDateToDayFullMonth } from 'src/common/date/date.helper';
import { EventModel } from 'src/api/models/event.model';
import { redirectToEvent } from 'src/common/url/redirect-to-event-by-id';

type IProps = {
  event: EventModel;
  classes?: {
    root?: string;
  };
} & RouteComponentProps;

const EventCard: React.FC<IProps> = ({ event, classes, history }) => {
  const { imageUrl, date, name, place, price, id } = event;
  const [hovered, setHovered] = React.useState<boolean>(false);

  const navigateToEvent = () => redirectToEvent(history, id);

  return (
    <div
      className={`${styles.root} ${classes?.root}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={navigateToEvent}
    >
      <div className={styles.image}>
        <img src={imageUrl} alt="Image on an event"></img>
      </div>
      <div className={styles.content}>
        <div className={styles.date}>
          <Text fontSize="1.1rem" textAlign="left" textTransform="capitalize" color="black">
            {formatDateToDayFullMonth(date)}
          </Text>
        </div>
        <div className={styles.name}>
          <Text
            fontSize="3rem"
            textAlign="left"
            lineHeight={1}
            textTransform="uppercase"
            color="black"
            fontFamily="League Gothic"
          >
            {name}
          </Text>
        </div>
        <div className={styles.place}>
          <Text fontSize="1rem" textAlign="left" textTransform="capitalize" color="black">
            {place.name}
          </Text>
        </div>
        <div className={styles.price}>
          <Text fontSize="1.25rem" textAlign="left" fontWeight={900} color="black">
            {price}
          </Text>
        </div>
      </div>
      {hovered && <EventCardImageHoverOverlay onBuy={() => {}} onLike={() => {}} event={event} />}
    </div>
  );
};

export default withRouter(EventCard);
