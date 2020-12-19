import { createAsyncAction } from 'src/redux/helpers/actionCreator';
import { StyleModel } from 'src/api/models/style.model';
import { PlaceModel } from 'src/api/models/place.model';

const type = 'CONCERTS/FILTERS';

export const fetchStyles = createAsyncAction(type, 'STYLES', {
  request: () => ({}),
  success: (styles: StyleModel[]) => ({ styles }),
});

export const fetchPlaces = createAsyncAction(type, 'PLACES', {
  request: () => ({}),
  success: (places: PlaceModel[]) => ({ places }),
});
