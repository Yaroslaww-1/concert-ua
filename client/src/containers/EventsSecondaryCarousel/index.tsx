/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

import styles from './styles.module.scss';
import Slider from 'react-slick';
import SquareImage from 'src/components/EventImageComponents/Images/SquareImage';
import SquareImageHoverOverlay from 'src/components/EventImageComponents/HoverOverlays/SquareImageHover';
import { useInitialFetch } from 'src/common/hooks/use-fetch-if-needed';
import { fetchPopularEvents } from 'src/containers/PopularEvents/redux/actions';
import { redirectToEvent } from 'src/common/url/redirect-to-event-by-id';

type IProps = {} & RouteComponentProps;

const EventsSecondaryCarousel: React.FC<IProps> = ({ history }) => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.home.popularEvents.state.events);
  const [drag, setDrag] = React.useState<boolean>(false);
  useInitialFetch(dispatch, fetchPopularEvents.request);

  const navigateToEvent = (id: string) => redirectToEvent(history, id);

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
        beforeChange={() => setDrag(true)}
        afterChange={() => setDrag(false)}
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
                bottomButtonText="Buy now"
                onBottomButtonClick={() => {}}
                onLike={() => {}}
                title={event.name}
                imageSrc={event.imageUrl}
              />
            }
            onClick={(e) => !drag && navigateToEvent(event.id)}
          />
        ))}
      </Slider>
    </div>
  );
};

export default withRouter(EventsSecondaryCarousel);
