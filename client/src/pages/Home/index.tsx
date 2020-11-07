import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchEvents } from './redux/actions';

import styles from './styles.module.scss';
import PageComponent from 'src/components/Page';
import EventsMainCarousel from 'src/containers/EventsMainCarousel';
import EventsSecondaryCarousel from 'src/containers/EventsSecondaryCarousel';
import NewEventsSection from 'src/containers/NewEvents';
import Subscribe from 'src/components/Subscribe';
import Footer from 'src/components/Footer';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchEvents.request());
  }, []);
  return (
    <PageComponent loading={false}>
      <EventsMainCarousel />
      <EventsSecondaryCarousel />
      <NewEventsSection />
      <NewEventsSection />
      <NewEventsSection />
      <Subscribe onSubscribe={() => {}} />
      <Footer />
    </PageComponent>
  );
};

export default HomePage;
