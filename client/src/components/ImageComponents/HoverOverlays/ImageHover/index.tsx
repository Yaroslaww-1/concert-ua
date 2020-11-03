import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  onLike: () => void;
  onBuy: () => void;
}

const SquareImageHoverOverlay: React.FC<IProps> = (props) => {
  return <div className={styles.root}></div>;
};

export default SquareImageHoverOverlay;
