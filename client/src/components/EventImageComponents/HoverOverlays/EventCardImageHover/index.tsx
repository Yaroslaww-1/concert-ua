import React from 'react';

import styles from './styles.module.scss';
import TransparentButton from 'src/components/Buttons/TransparentButton';
import LikeIcon from 'src/components/Icons/LikeIcon';
import Text from 'src/components/Text';

interface IProps {
  imageSrc: string;
  imageAltText: string;
  title: string;
  date: string;
  place: string;
  onLike: () => void;
  onBuy: () => void;
}

const EventCardImageHoverOverlay: React.FC<IProps> = ({
  imageSrc,
  imageAltText,
  title,
  date,
  place,
  onLike,
  onBuy,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.innerRoot}>
        <img src={imageSrc} alt={imageAltText}></img>
        <div className={styles.likeIconWrapper}>
          <LikeIcon onClick={onLike} classes={{ svg: styles.icon }} />
        </div>
        <div className={styles.date}>
          <Text fontSize={'0.75vw'} textTransform={'uppercase'}>
            {date}
          </Text>
        </div>
        <div className={styles.title}>
          <Text fontSize={'1.7vw'} textTransform={'uppercase'} lineHeight={1}>
            {title}
          </Text>
        </div>
        <div className={styles.place}>
          <Text fontSize={'1.25vw'}>{place}</Text>
        </div>
        <div className={styles.buyButton}>
          <TransparentButton text={'Buy now'} onClick={onBuy} />
        </div>
      </div>
    </div>
  );
};

export default EventCardImageHoverOverlay;
