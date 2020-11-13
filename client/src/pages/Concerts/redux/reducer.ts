import { combineReducers } from '@reduxjs/toolkit';
import eventsReducer from '../containers/EventsSection/redux/reducer';
import filterReducer from '../containers/Filter/redux/reducer';

const concertsReducer = combineReducers({
  filter: filterReducer,
  events: eventsReducer,
});

export default concertsReducer;
