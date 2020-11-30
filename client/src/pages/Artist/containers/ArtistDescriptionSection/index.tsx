import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

import ArtistDescriptionComponent from '../../components/ArtistDescriptionSection';

const ArtistDescription: React.FC = () => {
  const artist = useSelector((state: RootState) => state.artist.state.artist);
  const tickets = useSelector((state: RootState) => state.artist.state.tickets);

  return <ArtistDescriptionComponent artist={artist} tickets={tickets} />;
};

export default ArtistDescription;
