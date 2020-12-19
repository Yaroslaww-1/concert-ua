import { CityModel, defaultCity } from './city.model';

export type PlaceModel = {
  id: number;
  name: string;
  address: string;
  city: CityModel;
};

export const defaultPlace = {
  id: 0,
  name: '',
  address: '',
  city: defaultCity,
};
