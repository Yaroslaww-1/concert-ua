import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  columns?: number;
  withArrows?: boolean;
  changeTimeoutInSec?: number;
  items: JSX.Element[];
  className?: string;
}

const Carousel: React.FC<IProps> = ({
  columns = 1,
  withArrows = true,
  changeTimeoutInSec = 5,
  className = '',
  items: propsItems,
}) => {
  const items = propsItems.map((item, index) => ({ index, item }));
  const [visibleItemIndexes, setVisibleItemIndexes] = React.useState<number[]>(
    items.slice(0, columns).map((item) => item.index),
  );
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {items.filter((item) => visibleItemIndexes.includes(item.index)).map((item) => item.item)}
    </div>
  );
};

export default Carousel;
