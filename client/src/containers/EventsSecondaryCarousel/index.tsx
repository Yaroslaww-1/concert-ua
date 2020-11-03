/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

import styles from './styles.module.scss';
import Slider from 'react-slick';
import SquareImage from 'src/components/ImageComponents/Images/SquareImage';
import SquareImageHoverOverlay from 'src/components/ImageComponents/HoverOverlays/ImageHover';

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
        // autoplay={true}
        className={styles.slider}
        centerMode={true}
        centerPadding={'100px'}
        autoplaySpeed={5000}
        speed={500}
        slidesToShow={2}
        slidesToScroll={1}
        dotsClass={`slick-dots ${styles.navigation}`}
      >
        {events.map((event) => (
          <SquareImage
            key={event.id}
            imageSrc={event.imageUrl}
            imageAltText={event.name}
            classes={{
              root: styles.imageWrapper,
              image: styles.image,
            }}
            frontElement={<SquareImageHoverOverlay onBuy={() => {}} onLike={() => {}} title={event.name} />}
          />
        ))}
      </Slider>
    </div>
  );
};

export default EventsMainCarousel;
