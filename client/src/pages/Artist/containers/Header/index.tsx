import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

import HeaderComponent from '../../components/Header';

const Header: React.FC = () => {
  const artist = useSelector((state: RootState) => state.artist.state.artist);

  return <HeaderComponent artist={artist} />;
};

export default Header;
