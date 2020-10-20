import { createAsyncAction } from 'src/redux/helpers/actionCreator';
import { CityModel } from 'src/api/models/city.model';
import { DateModel } from 'src/api/models/date.model';

export const fetchDates = createAsyncAction('NAVBAR', 'DATE', {
  request: () => ({}),
  success: (dates: DateModel[]) => ({ dates }),
});

export const fetchCities = createAsyncAction('NAVBAR', 'CITY', {
  request: () => ({}),
  success: (cities: CityModel[]) => ({ cities }),
});
