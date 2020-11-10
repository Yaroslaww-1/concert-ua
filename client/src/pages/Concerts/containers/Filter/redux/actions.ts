import { createAsyncAction } from 'src/redux/helpers/actionCreator';
import { StyleModel } from 'src/api/models/style.model';
import { PlaceModel } from 'src/api/models/place.model';

export const fetchStyles = createAsyncAction('CONCERTS/FILTERS', 'STYLES', {
  request: () => ({}),
  success: (styles: StyleModel[]) => ({ styles }),
});

export const fetchPlaces = createAsyncAction('CONCERTS/FILTERS', 'PLACES', {
  request: () => ({}),
  success: (places: PlaceModel[]) => ({ places }),
});
