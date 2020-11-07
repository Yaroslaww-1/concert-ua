import React from 'react';

import styles from './styles.module.scss';
import TransparentButton from 'src/components/Buttons/TransparentButton';
import LikeIcon from 'src/components/Icons/LikeIcon';
import Text from 'src/components/Text';
import { getImageColor, RgbColor } from 'src/helpers/image.helper';

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
  const [backgroundColor, setBackgroundColor] = React.useState<RgbColor>([0, 0, 0]);
  React.useEffect(() => {
    getImageColor(imageSrc).then((color) => setBackgroundColor(color));
  }, []);
  return (
    <div className={styles.root}>
      <img src={imageSrc} alt={imageAltText}></img>
      <div className={styles.innerRoot} style={{ backgroundColor: `rgba(${[...backgroundColor]}, 0.9)` }}>
        <div className={styles.likeIconWrapper}>
          <LikeIcon onClick={onLike} classes={{ svg: styles.icon }} />
        </div>
        <div className={styles.date}>
          <Text fontSize={'0.75vw'} textTransform={'uppercase'}>
            {date}
          </Text>
        </div>
        <div className={styles.title}>
          <Text fontSize={'2vw'} fontWeight={600} textTransform={'uppercase'} lineHeight={1}>
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