import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { EventModel } from 'src/api/models/event.model';
import { createPaginationReducer } from 'src/redux/helpers/paginationHelperCreator';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchNewEvents, paginationActions } from './actions';

export type NewEventsState = {
  events: EventModel[];
};

const state = createReducer<NewEventsState>(
  { events: [] },
  {
    [fetchNewEvents.successAction.type]: (state, action: ReturnType<typeof fetchNewEvents.successPayload>) => {
      state.events = action.payload.events;
    },
  },
);

const newEventsReducer = combineReducers({
  state,
  loading: createLoadingReducer(fetchNewEvents),
  pagination: createPaginationReducer({ actions: paginationActions, defaultOffset: 0, defaultLimit: 8, step: 8 }),
});

export default newEventsReducer;
