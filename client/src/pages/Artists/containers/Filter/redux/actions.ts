import { createAsyncAction } from 'src/redux/helpers/actionCreator';
import { StyleModel } from 'src/api/models/style.model';
import { createAction } from '@reduxjs/toolkit';

const type = 'ARTISTS/FILTERS';

export const fetchStyles = createAsyncAction(type, 'STYLES', {
  request: () => ({}),
  success: (styles: StyleModel[]) => ({ styles }),
});

export const selectStyleFilter = createAction<StyleModel[]>(`${type}_SELECT_STYLE_FILTER`);

export const selectNameFilter = createAction<string>(`${type}_SELECT_NAME_FILTER`);
