import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

import HeaderComponent from '../../components/Header';

const Header: React.FC = () => {
  const event = useSelector((state: RootState) => state.event.state.event);

  return <HeaderComponent event={event} />;
};

export default Header;
