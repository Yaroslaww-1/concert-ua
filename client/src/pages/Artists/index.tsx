import React from 'react';

import PageComponent from 'src/components/Page';
import Subscribe from 'src/components/Subscribe';
import Footer from 'src/components/Footer';

const Artists: React.FC = () => {
  return (
    <PageComponent>
      <Subscribe onSubscribe={() => {}} />
      <Footer />
    </PageComponent>
  );
};

export default Artists;
