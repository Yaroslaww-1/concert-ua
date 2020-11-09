/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

import styles from './styles.module.scss';
import Slider from 'react-slick';
import SquareImage from 'src/components/EventImageComponents/Images/SquareImage';
import SquareImageHoverOverlay from 'src/components/EventImageComponents/HoverOverlays/SquareImageHover';
import { useFetchIfNeeded } from 'src/common/hooks/use-fetch-if-needed';
import { fetchPopularEvents } from 'src/containers/PopularEvents/redux/actions';

const EventsSecondaryCarousel: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.home.popularEvents.state.events);
  useFetchIfNeeded(dispatch, fetchPopularEvents.request);

  return (
    <div className={styles.carouselWrapper}>
      <Slider
        dots={true}
        infinite={true}
        autoplay={true}
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
            frontElement={
              <SquareImageHoverOverlay
                onBuy={() => {}}
                onLike={() => {}}
                title={event.name}
                imageSrc={event.imageUrl}
              />
            }
          />
        ))}
      </Slider>
    </div>
  );
};

export default EventsSecondaryCarousel;
