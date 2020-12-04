import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

import PersonalInfoComponent from '../../components/PersonalInfo';

const PersonalInfo: React.FC = () => {
  const user = useSelector((state: RootState) => state.profile.state.user);
  return <PersonalInfoComponent user={user!} />;
};

export default PersonalInfo;
