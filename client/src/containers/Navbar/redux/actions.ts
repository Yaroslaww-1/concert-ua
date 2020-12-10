import { createAsyncAction } from 'src/redux/helpers/actionCreator';
import { CityModel } from 'src/api/models/city.model';

export const fetchCities = createAsyncAction('NAVBAR', 'CITY', {
  request: () => ({}),
  success: (cities: CityModel[]) => ({ cities }),
});
