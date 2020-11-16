import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { defaultEvent, EventModel } from 'src/api/models/event.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchEvent, fetchPopularEvents } from './actions';

export type EventState = {
  event: EventModel;
  popularEvents: EventModel[];
};

const state = createReducer<EventState>(
  {
    event: defaultEvent,
    popularEvents: [],
  },
  {
    [fetchEvent.successAction.type]: (state, action: ReturnType<typeof fetchEvent.successPayload>) => {
      state.event = action.payload.event;
    },
    [fetchPopularEvents.successAction.type]: (state, action: ReturnType<typeof fetchPopularEvents.successPayload>) => {
      state.popularEvents = action.payload.events;
    },
  },
);

const eventReducer = combineReducers({
  state,
  loading: createLoadingReducer([fetchEvent]),
});

export default eventReducer;
