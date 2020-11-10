import { CityModel } from './city.model';

export type PlaceModel = {
  id: string;
  name: string;
  city: CityModel;
};
