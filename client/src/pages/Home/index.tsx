import React from 'react';

import PageComponent from 'src/components/Page';
import EventsMainCarousel from 'src/containers/EventsMainCarousel';
import EventsSecondaryCarousel from 'src/containers/EventsSecondaryCarousel';
import NewEventsSection from 'src/containers/NewEvents';
import Subscribe from 'src/components/Subscribe';
import Footer from 'src/components/Footer';
import PopularEventsSection from 'src/containers/PopularEvents';

const HomePage: React.FC = () => {
  return (
    <PageComponent>
      <EventsMainCarousel />
      <EventsSecondaryCarousel />
      <NewEventsSection />
      <PopularEventsSection />
      <NewEventsSection />
      <Subscribe onSubscribe={() => {}} />
      <Footer />
    </PageComponent>
  );
};

export default HomePage;
