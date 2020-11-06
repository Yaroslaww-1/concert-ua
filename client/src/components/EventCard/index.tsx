import React from 'react';

import styles from './styles.module.scss';
import EventCardImageHoverOverlay from '../EventImageComponents/HoverOverlays/EventCardImageHover';
import Text from '../Text';

interface IProps {
  image: {
    src: string;
    altText?: string;
  };
  date: string;
  name: string;
  place: string;
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
          <Text fontSize="1rem" textAlign="left" textTransform="capitalize" color="black">
            {date}
          </Text>
        </div>
        <div className={styles.name}>
          <Text
            fontSize="2rem"
            textAlign="left"
            fontWeight={900}
            lineHeight={1}
            textTransform="uppercase"
            color="black"
          >
            {name}
          </Text>
        </div>
        <div className={styles.place}>
          <Text fontSize="1rem" textAlign="left" textTransform="capitalize" color="black">
            {place}
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
