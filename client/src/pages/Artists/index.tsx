import React from 'react';

import PageComponent from 'src/components/Page';
import Subscribe from 'src/components/Subscribe';
import Footer from 'src/components/Footer';
import PageNameSection from '../Concerts/components/PageNameSection';
import Filter from './containers/Filter';

const Artists: React.FC = () => {
  return (
    <PageComponent>
      <PageNameSection />
      <Filter />
      <Subscribe onSubscribe={() => {}} />
      <Footer />
    </PageComponent>
  );
};

export default Artists;
