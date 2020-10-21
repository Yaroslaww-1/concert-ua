import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

import styles from './styles.module.scss';
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
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        dotsClass={`slick-dots ${styles.navigation}`}
      >
        {events.map((event) => (
          <img key={event.id} src={event.imageUrl} />
        ))}
      </Slider>
    </div>
  );
};

export default EventsMainCarousel;
