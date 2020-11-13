import { CityModel, defaultCity } from './city.model';

export type PlaceModel = {
  id: string;
  name: string;
  city: CityModel;
};

export const defaultPlace = {
  id: '',
  name: '',
  city: defaultCity,
};
