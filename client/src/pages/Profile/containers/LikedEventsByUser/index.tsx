import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

import LikedEventsByUserComponent from '../../components/LikedEventsByUser';
import { fetchUserLikedEvents } from './redux/actions';

const LikedEventsByUser: React.FC = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.profile.user.state.user?.id);
  const likedEvents = useSelector((state: RootState) => state.profile.likedEvents.state.likedEvents);

  React.useEffect(() => {
    dispatch(fetchUserLikedEvents.request(userId));
  }, [userId]);

  return <LikedEventsByUserComponent likedEvents={likedEvents} />;
};

export default LikedEventsByUser;
