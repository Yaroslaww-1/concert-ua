import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { ArtistModel, defaultArtist } from 'src/api/models/artist.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchArtist } from './actions';

export type ArtistState = {
  artist: ArtistModel;
};

const state = createReducer<ArtistState>(
  {
    artist: defaultArtist,
  },
  {
    [fetchArtist.successAction.type]: (state, action: ReturnType<typeof fetchArtist.successPayload>) => {
      state.artist = action.payload.artist;
    },
  },
);

const artistReducer = combineReducers({
  state,
  loading: createLoadingReducer([fetchArtist]),
});

export default artistReducer;
