import React from 'react';

import PageComponent from 'src/components/Page';
import Footer from 'src/components/Footer';
import Filter from './containers/Filter';
import PageNameSection from './components/PageNameSection';
import ArtistsSection from './containers/ArtistsSection';
import SubscribeContainer from 'src/containers/Subscribe';

const Artists: React.FC = () => {
  return (
    <PageComponent>
      <PageNameSection />
      <Filter />
      <ArtistsSection />
      <SubscribeContainer />
      <Footer />
    </PageComponent>
  );
};

export default Artists;
