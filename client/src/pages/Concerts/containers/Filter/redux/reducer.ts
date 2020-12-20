import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { PlaceModel } from 'src/api/models/place.model';
import { StyleModel } from 'src/api/models/style.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchStyles, fetchPlaces } from './actions';

export type FilterState = {
  availableStyles: StyleModel[];
  availablePlaces: PlaceModel[];
};

const state = createReducer<FilterState>(
  {
    availableStyles: [],
    availablePlaces: [],
  },
  {
    [fetchStyles.successAction.type]: (state, action: ReturnType<typeof fetchStyles.successPayload>) => {
      state.availableStyles = action.payload.styles;
    },
    [fetchPlaces.successAction.type]: (state, action: ReturnType<typeof fetchPlaces.successPayload>) => {
      state.availablePlaces = action.payload.places;
    },
  },
);

const filterReducer = combineReducers({
  state,
  loading: createLoadingReducer([fetchStyles, fetchPlaces]),
});

export default filterReducer;
