import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { EventModel } from 'src/api/models/event.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchPopularEvents } from './actions';

export type PopularEventsState = {
  events: EventModel[];
};

const state = createReducer<PopularEventsState>(
  { events: [] },
  {
    [fetchPopularEvents.successAction.type]: (state, action: ReturnType<typeof fetchPopularEvents.successPayload>) => {
      state.events = action.payload.events;
    },
  },
);

const popularEventsReducer = combineReducers({
  state,
  loading: createLoadingReducer(fetchPopularEvents),
});

export default popularEventsReducer;
