import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { CityModel } from 'src/api/models/city.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchCities } from './actions';

export type NavbarState = {
  cities: CityModel[];
};

const state = createReducer<NavbarState>(
  { cities: [] },
  {
    [fetchCities.successAction.type]: (state, action: ReturnType<typeof fetchCities.successPayload>) => {
      state.cities = action.payload.cities;
    },
  },
);

const navbarReducer = combineReducers({
  state,
  loading: createLoadingReducer([fetchCities]),
});

export default navbarReducer;
