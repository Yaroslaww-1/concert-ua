import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

import styles from './styles.module.scss';
import Carousel from 'src/components/Carousel';

const EventsMainCarousel: React.FC = () => {
  const dispatch = useDispatch();
  const {
    home: {
      state: { events },
    },
  } = useSelector((state: RootState) => ({ home: state.home }));
  return (
    <div className={styles.carouselWrapper}>
      <Carousel
        className={styles.carouselContent}
        leftArrowClassName={styles.arrowLeft}
        rightArrowClassName={styles.arrowRight}
        navigationClassName={styles.navigation}
        navigationSelectedClassName={styles.selected}
        navigationNotSelectedClassName={styles.notSelected}
        items={events.map((event) => (
          <div className={styles.slide} key={event.id}>
            <img src={event.imageUrl} />
          </div>
        ))}
      />
    </div>
  );
};

export default EventsMainCarousel;
