import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PageComponent from 'src/components/Page';
import Header from './containers/Header';
import Subscribe from 'src/components/Subscribe';
import Footer from 'src/components/Footer';

interface IProps {}

const Artist: React.FC<IProps & RouteComponentProps<{ id: string }>> = ({ match }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const artistId = match.params.id;
  }, [match.params.id]);

  return (
    <PageComponent>
      <Header />
      <Subscribe onSubscribe={() => {}} />
      <Footer />
    </PageComponent>
  );
};

export default withRouter(Artist);
