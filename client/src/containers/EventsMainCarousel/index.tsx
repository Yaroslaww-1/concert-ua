/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

import styles from './styles.module.scss';
import { useInitialFetch } from 'src/common/hooks/use-fetch-if-needed';
import { fetchNewEvents } from 'src/containers/NewEvents/redux/actions';
import { redirectToEvent } from 'src/common/url/redirect-to-event-by-id';
import Carousel from 'src/components/Carousel';
import { useIsDesktop } from 'src/common/hooks/media-hooks';

type IProps = {} & RouteComponentProps;

const EventsMainCarousel: React.FC<IProps> = ({ history }) => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.home.newEvents.state.events);
  useInitialFetch(dispatch, fetchNewEvents.request);

  const navigateToEvent = (id: number) => redirectToEvent(history, id);

  const isDesktop = useIsDesktop();

  return (
    <div className={styles.carouselWrapper}>
      <Carousel
        items={events.map((event) => ({ onClick: () => navigateToEvent(event.id), url: event.imageUrl }))}
        withArrows={isDesktop}
        classes={{ image: styles.image }}
      />
    </div>
  );
};

export default withRouter(EventsMainCarousel);
