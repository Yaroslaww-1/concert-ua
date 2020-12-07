import React from 'react';

import styles from './styles.module.scss';
import PageComponent from 'src/components/Page';
import { Typography } from '@material-ui/core';
import ShowMore from './components/ShowMore';
import EventCard from 'src/components/EventCard';
import { RootState } from 'src/redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialFetch } from 'src/common/hooks/use-fetch-if-needed';
import { fetchPopularEvents } from 'src/containers/PopularEvents/redux/actions';

const NotFoundPage: React.FC = () => {
  useInitialFetch(useDispatch(), fetchPopularEvents.request);
  const events = useSelector((state: RootState) => state.home.popularEvents.state.events);
  return (
    <PageComponent loading={false} withoutNavbar={true} className={styles.pageWrapper}>
      <div className={styles.pageContentWrapper}>
        <div className={styles.textWrapper}>
          <Typography variant="h2" component="h1" className={styles.notFoundText}>
            Page was not found :(
          </Typography>
          <h1>Do not worry! Try some popular events we prepared for you:</h1>
        </div>
        <div className={styles.listWrapper}>
          {events.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          <ShowMore />
        </div>
      </div>
    </PageComponent>
  );
};

export default NotFoundPage;
