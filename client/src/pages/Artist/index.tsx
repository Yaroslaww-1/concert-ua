import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchArtist, fetchTickets } from './redux/actions';

import PageComponent from 'src/components/Page';
import Header from './containers/Header';
import Footer from 'src/components/Footer';
import ArtistDescription from './containers/ArtistDescriptionSection';
import SubscribeContainer from 'src/containers/Subscribe';

interface IProps {}

const Artist: React.FC<IProps & RouteComponentProps<{ id: string }>> = ({ match }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const artistId = match.params.id;
    dispatch(fetchArtist.request(artistId));
    dispatch(fetchTickets.request(artistId));
  }, [match.params.id]);

  return (
    <PageComponent>
      <Header />
      <ArtistDescription />
      <SubscribeContainer />
      <Footer />
    </PageComponent>
  );
};

export default withRouter(Artist);
