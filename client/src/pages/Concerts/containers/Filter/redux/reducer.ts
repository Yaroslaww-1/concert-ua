import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { PlaceModel } from 'src/api/models/place.model';
import { StyleModel } from 'src/api/models/style.model';
import { addDaysToDate } from 'src/common/date/date.helper';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchStyles, fetchPlaces, selectDateFilter, selectStyleFilter, selectPlaceFilter } from './actions';

export interface IDateFilter {
  dateFrom: Date;
  dateTo: Date;
}

export interface IStyleFilter {
  availableStyles: StyleModel[];
  selectedStyles: StyleModel[];
}

export interface IPlaceFilter {
  availablePlaces: PlaceModel[];
  selectedPlaces: PlaceModel[];
}

export type FilterState = {
  dateFilter: IDateFilter;
  styleFilter: IStyleFilter;
  placeFilter: IPlaceFilter;
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
    [selectDateFilter.type]: (state, action: ReturnType<typeof selectDateFilter>) => {
      state.dateFilter = action.payload;
    },
    [selectStyleFilter.type]: (state, action: ReturnType<typeof selectStyleFilter>) => {
      state.styleFilter.selectedStyles = action.payload;
    },
    [selectPlaceFilter.type]: (state, action: ReturnType<typeof selectPlaceFilter>) => {
      state.placeFilter.selectedPlaces = action.payload;
    },
  },
);

const filterReducer = combineReducers({
  state,
  loading: createLoadingReducer([fetchStyles, fetchPlaces]),
});

export default filterReducer;
