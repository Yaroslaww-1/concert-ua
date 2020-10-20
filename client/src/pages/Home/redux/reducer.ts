import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { EventModel } from 'src/api/models/event.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchEvents } from './actions';

export type NavbarState = {
  events: EventModel[];
};

const state = createReducer<NavbarState>(
  { events: [] },
  {
    [fetchEvents.successAction.type]: (state, action: ReturnType<typeof fetchEvents.successPayload>) => {
      state.events = action.payload.events;
    },
  },
);

const homeReducer = combineReducers({
  state,
  loading: createLoadingReducer(fetchEvents),
});

export default homeReducer;
