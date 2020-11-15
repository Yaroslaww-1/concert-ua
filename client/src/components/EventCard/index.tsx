import React from 'react';

import styles from './styles.module.scss';
import EventCardImageHoverOverlay from '../EventImageComponents/HoverOverlays/EventCardImageHover';
import Text from '../Text';
import { PlaceModel } from 'src/api/models/place.model';
import { formatDateToDayFullMonth } from 'src/common/date/date.helper';

interface IProps {
  image: {
    src: string;
    altText?: string;
  };
  date: Date;
  name: string;
  place: PlaceModel;
  price: string;
  classes?: {
    root?: string;
  };
}

const EventCard: React.FC<IProps> = ({
  image: { src: imageSrc, altText: imageAlt = 'An image' },
  date,
  name,
  place,
  price,
  classes,
}) => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  return (
    <div
      className={`${styles.root} ${classes?.root}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.image}>
        <img src={imageSrc} alt={imageAlt}></img>
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
      {hovered && (
        <EventCardImageHoverOverlay
          onBuy={() => {}}
          onLike={() => {}}
          title={name}
          date={date}
          place={place}
          imageSrc={imageSrc}
          imageAltText={imageAlt}
        />
      )}
    </div>
  );
};

export default EventCard;
