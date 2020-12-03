import React from 'react';

import PageComponent from 'src/components/Page';
import Subscribe from 'src/components/Subscribe';
import Footer from 'src/components/Footer';
import Filter from './containers/Filter';
import PageNameSection from './components/PageNameSection';
import ArtistsSection from './containers/ArtistsSection';

const Artists: React.FC = () => {
  return (
    <PageComponent>
      <PageNameSection />
      <Filter />
      <ArtistsSection />
      <Subscribe onSubscribe={() => {}} />
      <Footer />
    </PageComponent>
  );
};

export default Artists;
