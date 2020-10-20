import React from 'react';
import { useInterval } from 'src/common/hooks/use-interval';

import styles from './styles.module.scss';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

interface IProps {
  columns?: number;
  withArrows?: boolean;
  changeTimeout?: number;
  items: JSX.Element[];
  className?: string;
  leftArrowClassName?: string;
  rightArrowClassName?: string;
}

const Carousel: React.FC<IProps> = ({
  columns = 1,
  withArrows = true,
  changeTimeout = 5000,
  className = '',
  items: propsItems,
  leftArrowClassName,
  rightArrowClassName,
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
      {withArrows && (
        <>
          <div className={`${styles.arrowLeft} ${leftArrowClassName}`} onClick={moveLeft}>
            <div className={styles.shadow}>
              <NavigateBeforeIcon />
            </div>
          </div>
          <div className={`${styles.arrowRight} ${rightArrowClassName}`} onClick={moveRight}>
            <div className={styles.shadow}>
              <NavigateNextIcon />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
