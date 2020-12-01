import { combineReducers } from '@reduxjs/toolkit';
import artistsReducer from '../containers/ArtistsSection/redux/reducer';
import filterReducer from '../containers/Filter/redux/reducer';

const artistsWithFilterReducer = combineReducers({
  filter: filterReducer,
  artists: artistsReducer,
});

export default artistsWithFilterReducer;
