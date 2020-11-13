import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { defaultEvent, EventModel } from 'src/api/models/event.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchEvent } from './actions';

export type EventState = {
  event: EventModel;
};

const state = createReducer<EventState>(
  {
    event: defaultEvent,
  },
  {
    [fetchEvent.successAction.type]: (state, action: ReturnType<typeof fetchEvent.successPayload>) => {
      state.event = action.payload.event;
    },
  },
);

const eventReducer = combineReducers({
  state,
  loading: createLoadingReducer([fetchEvent]),
});

export default eventReducer;
