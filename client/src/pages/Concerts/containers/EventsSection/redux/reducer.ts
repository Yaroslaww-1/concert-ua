import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { EventModel } from 'src/api/models/event.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchEvents } from './actions';

export type EventsState = {
  events: EventModel[];
};

const state = createReducer<EventsState>(
  {
    events: [],
  },
  {
    [fetchEvents.successAction.type]: (state, action: ReturnType<typeof fetchEvents.successPayload>) => {
      state.events = action.payload.events;
    },
  },
);

const eventsReducer = combineReducers({
  state,
  loading: createLoadingReducer([fetchEvents]),
});

export default eventsReducer;
