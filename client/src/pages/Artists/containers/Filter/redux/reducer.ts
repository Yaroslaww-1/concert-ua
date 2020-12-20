import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { StyleModel } from 'src/api/models/style.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchStyles } from './actions';

export type FilterState = {
  availableStyles: StyleModel[];
};

const state = createReducer<FilterState>(
  {
    availableStyles: [],
  },
  {
    [fetchStyles.successAction.type]: (state, action: ReturnType<typeof fetchStyles.successPayload>) => {
      state.availableStyles = action.payload.styles;
    },
  },
);

const filterReducer = combineReducers({
  state,
  loading: createLoadingReducer([fetchStyles]),
});

export default filterReducer;
