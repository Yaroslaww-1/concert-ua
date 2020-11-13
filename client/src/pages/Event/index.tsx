import React from 'react';

import PageComponent from 'src/components/Page';
import Subscribe from 'src/components/Subscribe';
import Footer from 'src/components/Footer';
import Header from './containers/Header';

const Event: React.FC = () => {
  return (
    <PageComponent>
      <Header />
      <Subscribe onSubscribe={() => {}} />
      <Footer />
    </PageComponent>
  );
};

export default Event;
