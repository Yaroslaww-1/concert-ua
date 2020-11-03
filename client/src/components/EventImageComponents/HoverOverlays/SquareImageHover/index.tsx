import React from 'react';

import styles from './styles.module.scss';
import TransparentButton from 'src/components/Buttons/TransparentButton';
import LikeIcon from 'src/components/Icons/LikeIcon';

interface IProps {
  title: string;
  onLike: () => void;
  onBuy: () => void;
}

const SquareImageHoverOverlay: React.FC<IProps> = ({ title, onLike, onBuy }) => {
  return (
    <div className={styles.root}>
      <div className={styles.innerRoot}>
        <div className={styles.likeIcon}>
          <LikeIcon onClick={onLike} />
        </div>
        <div className={styles.title}>
          <div>{title}</div>
        </div>
        <div className={styles.buyButton}>
          <TransparentButton text={'Buy now'} onClick={onBuy} />
        </div>
      </div>
    </div>
  );
};

export default SquareImageHoverOverlay;
