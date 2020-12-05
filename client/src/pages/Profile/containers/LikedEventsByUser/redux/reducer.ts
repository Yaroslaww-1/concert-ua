import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { EventModel } from 'src/api/models/event.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';
import { fetchUserLikedEvents } from './actions';

export type UserLikedEventsState = {
  likedEvents: EventModel[];
};

const state = createReducer<UserLikedEventsState>(
  { likedEvents: [] },
  {
    [fetchUserLikedEvents.successAction.type]: (
      state,
      action: ReturnType<typeof fetchUserLikedEvents.successPayload>,
    ) => {
      state.likedEvents = action.payload.events;
    },
  },
);

const userLikedEventsReducer = combineReducers({
  state,
  loading: createLoadingReducer(fetchUserLikedEvents, true),
});

export default userLikedEventsReducer;
