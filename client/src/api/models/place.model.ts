import { CityModel, defaultCity } from './city.model';

export type PlaceModel = {
  id: string;
  name: string;
  address: string;
  city: CityModel;
};

export const defaultPlace = {
  id: '',
  name: '',
  address: '',
  city: defaultCity,
};
