import { combineReducers } from '@reduxjs/toolkit';
import filterReducer from '../containers/Filter/redux/reducer';

const concertsReducer = combineReducers({
  filter: filterReducer,
});

export default concertsReducer;
