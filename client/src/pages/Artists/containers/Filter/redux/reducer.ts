import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { StyleModel } from 'src/api/models/style.model';
import { addDaysToDate } from 'src/common/date/date.helper';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchStyles, selectDateFilter, selectStyleFilter, selectNameFilter } from './actions';

export interface IDateFilter {
  date: {
    from: Date;
    to: Date;
  };
}

export interface IStyleFilter {
  availableStyles: StyleModel[];
  selectedStyles: StyleModel[];
}

export type FilterState = {
  dateFilter: IDateFilter;
  styleFilter: IStyleFilter;
  nameFilter: string;
};

const state = createReducer<FilterState>(
  {
    dateFilter: { date: { from: new Date(), to: addDaysToDate(new Date(), 1000) } },
    styleFilter: { availableStyles: [], selectedStyles: [] },
    nameFilter: '',
  },
  {
    [fetchStyles.successAction.type]: (state, action: ReturnType<typeof fetchStyles.successPayload>) => {
      state.styleFilter.availableStyles = action.payload.styles;
    },
    [selectDateFilter.type]: (state, action: ReturnType<typeof selectDateFilter>) => {
      state.dateFilter = action.payload;
    },
    [selectStyleFilter.type]: (state, action: ReturnType<typeof selectStyleFilter>) => {
      state.styleFilter.selectedStyles = action.payload;
    },
    [selectNameFilter.type]: (state, action: ReturnType<typeof selectNameFilter>) => {
      state.nameFilter = action.payload;
    },
  },
);

const filterReducer = combineReducers({
  state,
  loading: createLoadingReducer([fetchStyles]),
});

export default filterReducer;
