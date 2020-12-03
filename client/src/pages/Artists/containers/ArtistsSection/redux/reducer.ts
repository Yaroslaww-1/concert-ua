import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { ArtistModel } from 'src/api/models/artist.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchArtists } from './actions';

export type ArtistsState = {
  artists: ArtistModel[];
};

const state = createReducer<ArtistsState>(
  {
    artists: [],
  },
  {
    [fetchArtists.successAction.type]: (state, action: ReturnType<typeof fetchArtists.successPayload>) => {
      state.artists = action.payload.artists;
    },
  },
);

const artistsReducer = combineReducers({
  state,
  loading: createLoadingReducer([fetchArtists]),
});

export default artistsReducer;
