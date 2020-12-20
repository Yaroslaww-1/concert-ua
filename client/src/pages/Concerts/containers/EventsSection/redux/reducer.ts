import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { EventModel } from 'src/api/models/event.model';
import { createPaginationReducer } from 'src/redux/helpers/paginationHelperCreator';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchEvents, paginationActions } from './actions';

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
  pagination: createPaginationReducer({ actions: paginationActions, defaultOffset: 0, defaultLimit: 8, step: 8 }),
});

export default eventsReducer;
