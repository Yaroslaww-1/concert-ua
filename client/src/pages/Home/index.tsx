import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchEvents } from './redux/actions';

import styles from './styles.module.scss';
import PageComponent from 'src/components/Page';
import EventsMainCarousel from 'src/containers/EventsMainCarousel';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchEvents.request());
  }, []);
  return (
    <PageComponent loading={false}>
      <EventsMainCarousel />
    </PageComponent>
  );
};

export default HomePage;
