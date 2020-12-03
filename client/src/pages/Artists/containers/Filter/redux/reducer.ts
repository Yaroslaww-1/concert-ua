import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { StyleModel } from 'src/api/models/style.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchStyles, selectStyleFilter, selectNameFilter } from './actions';

export interface INameFilter {
  name: string;
}

export interface IStyleFilter {
  availableStyles: StyleModel[];
  selectedStyles: StyleModel[];
}

export type FilterState = {
  styleFilter: IStyleFilter;
  nameFilter: INameFilter;
};

const state = createReducer<FilterState>(
  {
    styleFilter: { availableStyles: [], selectedStyles: [] },
    nameFilter: { name: '' },
  },
  {
    [fetchStyles.successAction.type]: (state, action: ReturnType<typeof fetchStyles.successPayload>) => {
      state.styleFilter.availableStyles = action.payload.styles;
    },
    [selectStyleFilter.type]: (state, action: ReturnType<typeof selectStyleFilter>) => {
      state.styleFilter.selectedStyles = action.payload;
    },
    [selectNameFilter.type]: (state, action: ReturnType<typeof selectNameFilter>) => {
      state.nameFilter.name = action.payload;
    },
  },
);

const filterReducer = combineReducers({
  state,
  loading: createLoadingReducer([fetchStyles]),
});

export default filterReducer;
