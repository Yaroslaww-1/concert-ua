import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { EventModel } from 'src/api/models/event.model';
import { createPaginationReducer } from 'src/redux/helpers/paginationHelperCreator';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchPopularEvents, paginationActions } from './actions';

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
  pagination: createPaginationReducer({ actions: paginationActions, defaultOffset: 0, defaultLimit: 8, step: 8 }),
});

export default popularEventsReducer;
