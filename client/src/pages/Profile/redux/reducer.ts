import { combineReducers } from '@reduxjs/toolkit';
import userLikedEventsReducer from '../containers/LikedEventsByUser/redux/reducer';
import userReducer from '../containers/PersonalInfo/redux/reducer';

const profileReducer = combineReducers({
  user: userReducer,
  likedEvents: userLikedEventsReducer,
});

export default profileReducer;
