import React from 'react';

import styles from './styles.module.scss';
import SquareImageHoverOverlay from 'src/components/EventImageComponents/HoverOverlays/SquareImageHover';
import EventCardImageHoverOverlay from '../EventImageComponents/HoverOverlays/EventCardImageHover';

interface IProps {
  image: {
    src: string;
    alt?: string;
  };
  date: string;
  name: string;
  place: string;
  price: string;
  classes?: {
    root?: string;
  };
}

const EventCard: React.FC<IProps> = ({ image, date, name, place, price, classes }) => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  return (
    <div
      className={`${styles.root} ${classes?.root}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.image}>
        <img src={image.src} alt={image.alt || 'An image'}></img>
      </div>
      <div className={styles.main}>
        <div className={styles.date}>{date}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.place}>{place}</div>
        <div className={styles.price}>{price}</div>
      </div>
      {hovered && (
        <EventCardImageHoverOverlay onBuy={() => {}} onLike={() => {}} title={name} date={date} place={place} />
      )}
    </div>
  );
};

export default EventCard;
