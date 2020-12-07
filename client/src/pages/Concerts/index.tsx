import React from 'react';

import PageComponent from 'src/components/Page';
import Footer from 'src/components/Footer';
import Filter from './containers/Filter';
import PageNameSection from './components/PageNameSection';
import EventsSection from './containers/EventsSection';
import SubscribeContainer from 'src/containers/Subscribe';

const Concerts: React.FC = () => {
  return (
    <PageComponent>
      <PageNameSection />
      <Filter />
      <EventsSection />
      <SubscribeContainer />
      <Footer />
    </PageComponent>
  );
};

export default Concerts;
