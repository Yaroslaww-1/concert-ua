import React from 'react';

import PageComponent from 'src/components/Page';
import EventsMainCarousel from 'src/containers/EventsMainCarousel';
import EventsSecondaryCarousel from 'src/containers/EventsSecondaryCarousel';
import NewEventsSection from 'src/containers/NewEvents';
import Footer from 'src/components/Footer';
import PopularEventsSection from 'src/containers/PopularEvents';
import SubscribeContainer from 'src/containers/Subscribe';

const HomePage: React.FC = () => {
  return (
    <PageComponent>
      <EventsMainCarousel />
      <EventsSecondaryCarousel />
      <NewEventsSection />
      <PopularEventsSection />
      <SubscribeContainer />
      <Footer />
    </PageComponent>
  );
};

export default HomePage;
