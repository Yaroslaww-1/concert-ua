import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

import styles from './styles.module.scss';
import Carousel from 'src/components/Carousel';
import Slider from 'react-slick';

const EventsMainCarousel: React.FC = () => {
  const dispatch = useDispatch();
  const {
    home: {
      state: { events },
    },
  } = useSelector((state: RootState) => ({ home: state.home }));
  return (
    <div className={styles.carouselWrapper}>
      {/* <Carousel
        className={styles.carouselContent}
        leftArrowClassName={styles.arrowLeft}
        rightArrowClassName={styles.arrowRight}
        navigationClassName={styles.navigation}
        navigationSelectedClassName={styles.selected}
        navigationNotSelectedClassName={styles.notSelected}
        items={events.map((event) => (
          <img key={event.id} src={event.imageUrl} />
        ))}
      /> */}
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        className={styles.innerWrapper}
      >
        {events.map(
          (event) => (
            // <div key={item.index} className={`${styles.inner}`}>
            <img key={event.id} src={event.imageUrl} />
          ),
          // </div>
        )}
      </Slider>
    </div>
  );
};

export default EventsMainCarousel;
