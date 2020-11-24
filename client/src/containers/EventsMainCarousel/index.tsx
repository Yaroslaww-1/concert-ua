/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

import styles from './styles.module.scss';
import Slider from 'react-slick';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import FullscreenImage from 'src/components/EventImageComponents/Images/FullscreenImage';
import { useInitialFetch } from 'src/common/hooks/use-fetch-if-needed';
import { fetchNewEvents } from 'src/containers/NewEvents/redux/actions';
import { redirectToEvent } from 'src/common/url/redirect-to-event-by-id';

type IProps = {} & RouteComponentProps;

const EventsMainCarousel: React.FC<IProps> = ({ history }) => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.home.newEvents.state.events);
  const [drag, setDrag] = React.useState<boolean>(false);
  useInitialFetch(dispatch, fetchNewEvents.request);

  const navigateToEvent = (id: string) => redirectToEvent(history, id);

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} ${styles.arrow} ${styles.next}`} style={{ ...style }} onClick={onClick}>
        <div className={`${styles.shadow} ${styles.next}`}>
          <NavigateNextIcon className={`${styles.nextArrow}`} onClick={onClick} />
        </div>
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} ${styles.arrow} ${styles.prev}`} style={{ ...style }} onClick={onClick}>
        <div className={`${styles.shadow} ${styles.prev}`}>
          <NavigateBeforeIcon className={`${styles.prevArrow}`} onClick={onClick} />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.carouselWrapper}>
      <Slider
        dots={true}
        infinite={true}
        autoplay={true}
        autoplaySpeed={5000}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        dotsClass={`slick-dots ${styles.navigation}`}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        beforeChange={() => setDrag(true)}
        afterChange={() => setDrag(false)}
      >
        {events.map((event) => (
          <FullscreenImage
            key={event.id}
            imageSrc={event.imageUrl}
            imageAltText={event.name}
            onClick={(e) => !drag && navigateToEvent(event.id)}
          />
        ))}
      </Slider>
    </div>
  );
};

export default withRouter(EventsMainCarousel);
