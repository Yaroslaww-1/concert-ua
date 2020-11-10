import { createAsyncAction } from 'src/redux/helpers/actionCreator';
import { StyleModel } from 'src/api/models/style.model';
import { PlaceModel } from 'src/api/models/place.model';
import { IEventFilter } from 'src/api/services/event.service';

export const fetchStyles = createAsyncAction('CONCERTS/FILTERS', 'STYLES', {
  request: (filter: IEventFilter) => ({}),
  success: (styles: StyleModel[]) => ({ styles }),
});

export const fetchPlaces = createAsyncAction('CONCERTS/FILTERS', 'PLACES', {
  request: (filter: IEventFilter) => ({}),
  success: (places: PlaceModel[]) => ({ places }),
});
