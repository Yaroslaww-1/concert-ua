import React from 'react';

import PageComponent from 'src/components/Page';
import Subscribe from 'src/components/Subscribe';
import Footer from 'src/components/Footer';
import Filter from './containers/Filter';

const Concerts: React.FC = () => {
  return (
    <PageComponent>
      <Filter />
      <Subscribe onSubscribe={() => {}} />
      <Footer />
    </PageComponent>
  );
};

export default Concerts;
