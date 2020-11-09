import { combineReducers } from '@reduxjs/toolkit';
import newEventsReducer from 'src/containers/NewEvents/redux/reducer';
import popularEventsReducer from 'src/containers/PopularEvents/redux/reducer';

const homeReducer = combineReducers({
  newEvents: newEventsReducer,
  popularEvents: popularEventsReducer,
});

export default homeReducer;
