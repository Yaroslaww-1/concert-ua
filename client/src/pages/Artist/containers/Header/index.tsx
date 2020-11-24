import React from 'react';

import { useSelector } from 'react-redux';
import { defaultArtist } from 'src/api/models/artist.model';
import { RootState } from 'src/redux/rootReducer';

import HeaderComponent from '../../components/Header';

const Header: React.FC = () => {
  // const artist = useSelector((state: RootState) => state.event.state.event);

  return <HeaderComponent artist={defaultArtist} />;
};

export default Header;
