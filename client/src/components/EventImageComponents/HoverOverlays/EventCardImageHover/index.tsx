import React from 'react';

import styles from './styles.module.scss';
import TransparentButton from 'src/components/Buttons/TransparentButton';
import LikeIcon from 'src/components/Icons/LikeIcon';
import Text from 'src/components/Text';
import { getImageColor, RgbColor } from 'src/common/images/image.helper';
import { formatDateToDayFullMonth } from 'src/common/date/date.helper';
import { EventModel } from 'src/api/models/event.model';

interface IProps {
  event: EventModel;
  onLike: () => void;
  onBuy: () => void;
}

const EventCardImageHoverOverlay: React.FC<IProps> = ({ event: { imageUrl, name, date, place }, onLike, onBuy }) => {
  const [backgroundColor, setBackgroundColor] = React.useState<RgbColor>([0, 0, 0]);
  React.useEffect(() => {
    getImageColor(imageUrl).then((color) => setBackgroundColor(color));
  }, []);
  return (
    <div className={styles.root}>
      <img src={imageUrl} alt="Image of an event"></img>
      <div className={styles.innerRoot} style={{ backgroundColor: `rgba(${[...backgroundColor]}, 0.9)` }}>
        <div className={styles.likeIconWrapper}>
          <LikeIcon onClick={onLike} classes={{ svg: styles.icon }} />
        </div>
        <div className={styles.date}>
          <Text fontSize={'1.15rem'} textTransform={'uppercase'}>
            {formatDateToDayFullMonth(date)}
          </Text>
        </div>
        <div className={styles.title}>
          <Text fontSize={'2vw'} fontWeight={600} textTransform={'uppercase'} lineHeight={1}>
            {name}
          </Text>
        </div>
        <div className={styles.place}>
          <Text fontSize={'1.25rem'}>{place.name}</Text>
        </div>
        <div className={styles.buyButton}>
          <TransparentButton text={'Buy now'} onClick={onBuy} />
        </div>
      </div>
    </div>
  );
};

export default EventCardImageHoverOverlay;
