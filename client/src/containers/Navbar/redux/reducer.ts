import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { CityModel } from 'src/api/models/city.model';
import { DateModel } from 'src/api/models/date.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchDates, fetchCities } from './actions';

export type NavbarState = {
  dates: DateModel[];
  cities: CityModel[];
};

const state = createReducer<NavbarState>(
  { dates: [], cities: [] },
  {
    [fetchDates.successAction.type]: (state, action: ReturnType<typeof fetchDates.successPayload>) => {
      state.dates = action.payload.dates;
    },
    [fetchCities.successAction.type]: (state, action: ReturnType<typeof fetchCities.successPayload>) => {
      state.cities = action.payload.cities;
    },
  },
);

const navbarReducer = combineReducers({
  state,
  loading: createLoadingReducer([fetchDates, fetchCities]),
});

export default navbarReducer;
