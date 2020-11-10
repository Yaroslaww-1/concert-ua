import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { PlaceModel } from 'src/api/models/place.model';
import { StyleModel } from 'src/api/models/style.model';
import { addDaysToDate } from 'src/common/date/date.helper';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchStyles, fetchPlaces } from './actions';

export type FilterState = {
  dateFilter: {
    dateFrom: Date;
    dateTo: Date;
  };
  styleFilter: {
    availableStyles: StyleModel[];
    selectedStyles: StyleModel[];
  };
  placeFilter: {
    availablePlaces: PlaceModel[];
    selectedPlaces: PlaceModel[];
  };
};

const state = createReducer<FilterState>(
  {
    dateFilter: { dateFrom: new Date(), dateTo: addDaysToDate(new Date(), 1000) },
    styleFilter: { availableStyles: [], selectedStyles: [] },
    placeFilter: { availablePlaces: [], selectedPlaces: [] },
  },
  {
    [fetchStyles.successAction.type]: (state, action: ReturnType<typeof fetchStyles.successPayload>) => {
      state.styleFilter.availableStyles = action.payload.styles;
    },
    [fetchPlaces.successAction.type]: (state, action: ReturnType<typeof fetchPlaces.successPayload>) => {
      state.placeFilter.availablePlaces = action.payload.places;
    },
  },
);

const filterReducer = combineReducers({
  state,
  loading: createLoadingReducer([fetchStyles, fetchPlaces]),
});

export default filterReducer;
