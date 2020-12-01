import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { ArtistModel, defaultArtist } from 'src/api/models/artist.model';
import { EventModel } from 'src/api/models/event.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchArtist, fetchTickets } from './actions';

export type ArtistState = {
  artist: ArtistModel;
  tickets: EventModel[];
};

const state = createReducer<ArtistState>(
  {
    artist: defaultArtist,
    tickets: [],
  },
  {
    [fetchArtist.successAction.type]: (state, action: ReturnType<typeof fetchArtist.successPayload>) => {
      state.artist = action.payload.artist;
    },
    [fetchTickets.successAction.type]: (state, action: ReturnType<typeof fetchTickets.successPayload>) => {
      state.tickets = action.payload.tickets;
    },
  },
);

const artistReducer = combineReducers({
  state,
  loading: createLoadingReducer([fetchArtist, fetchTickets]),
});

export default artistReducer;
