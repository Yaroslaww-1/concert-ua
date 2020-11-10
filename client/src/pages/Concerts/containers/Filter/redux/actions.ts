import { createAsyncAction } from 'src/redux/helpers/actionCreator';
import { StyleModel } from 'src/api/models/style.model';
import { PlaceModel } from 'src/api/models/place.model';
import { createAction } from '@reduxjs/toolkit';
import { IDateFilter } from './reducer';

const type = 'CONCERTS/FILTERS';

export const fetchStyles = createAsyncAction(type, 'STYLES', {
  request: () => ({}),
  success: (styles: StyleModel[]) => ({ styles }),
});

export const fetchPlaces = createAsyncAction(type, 'PLACES', {
  request: () => ({}),
  success: (places: PlaceModel[]) => ({ places }),
});

export const selectDateFilter = createAction<IDateFilter>(`${type}_SELECT_DATE_FILTER`);

export const selectStyleFilter = createAction<StyleModel[]>(`${type}_SELECT_STYLE_FILTER`);

export const selectPlaceFilter = createAction<PlaceModel[]>(`${type}_SELECT_PLACE_FILTER`);
