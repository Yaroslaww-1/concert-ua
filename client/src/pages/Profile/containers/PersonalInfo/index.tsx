import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { IUpdateUserDto } from 'src/api/services/user.service';
import { RootState } from 'src/redux/rootReducer';

import PersonalInfoComponent from '../../components/PersonalInfo';
import { updateUser } from './redux/actions';

const PersonalInfo: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.profile.user.state.user);

  const onUserUpdate = (userDate: IUpdateUserDto) => {
    dispatch(updateUser.request(userDate));
  };

  return <PersonalInfoComponent user={user!} onSubmit={onUserUpdate} />;
};

export default PersonalInfo;
