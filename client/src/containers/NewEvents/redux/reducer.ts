import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { EventModel } from 'src/api/models/event.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchNewEvents } from './actions';

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
});

export default newEventsReducer;
