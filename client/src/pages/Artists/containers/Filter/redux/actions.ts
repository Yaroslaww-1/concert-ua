import { createAsyncAction } from 'src/redux/helpers/actionCreator';
import { StyleModel } from 'src/api/models/style.model';

const type = 'ARTISTS/FILTERS';

export const fetchStyles = createAsyncAction(type, 'STYLES', {
  request: () => ({}),
  success: (styles: StyleModel[]) => ({ styles }),
});
