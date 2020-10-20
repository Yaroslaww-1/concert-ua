import React from 'react';
import { useInterval } from 'src/common/hooks/use-interval';

import styles from './styles.module.scss';

interface IProps {
  columns?: number;
  withArrows?: boolean;
  changeTimeout?: number;
  items: JSX.Element[];
  className?: string;
}

const Carousel: React.FC<IProps> = ({
  columns = 1,
  withArrows = true,
  changeTimeout = 5000,
  className = '',
  items: propsItems,
}) => {
  const items = propsItems.map((item, index) => ({ index, item }));
  const [visibleItemIndexes, setVisibleItemIndexes] = React.useState<number[]>(
    items.slice(0, columns).map((item) => item.index),
  );

  React.useEffect(() => {
    setVisibleItemIndexes(items.slice(0, columns).map((item) => item.index));
  }, [columns, propsItems]);

  const moveRight = () => {
    const lastVisibleIndex = visibleItemIndexes[visibleItemIndexes.length - 1];
    const [, ...visibleIndexes] = visibleItemIndexes;
    const newVisibleIndex = lastVisibleIndex + 1 < items.length ? lastVisibleIndex + 1 : 0;
    visibleIndexes.push(newVisibleIndex);
    setVisibleItemIndexes(visibleIndexes);
  };

  const moveLeft = () => {
    const visibleIndexes = visibleItemIndexes;
    const firstVisibleIndex = visibleIndexes[0];
    visibleIndexes.pop();
    const newVisibleIndex = firstVisibleIndex - 1 >= 0 ? firstVisibleIndex - 1 : items.length - 1;
    setVisibleItemIndexes([newVisibleIndex, ...visibleIndexes]);
  };

  useInterval(() => {
    moveRight();
  }, changeTimeout);

  return (
    <div className={`${styles.wrapper} ${className}`}>
      {items.filter((item) => visibleItemIndexes.includes(item.index)).map((item) => item.item)}
    </div>
  );
};

export default Carousel;
