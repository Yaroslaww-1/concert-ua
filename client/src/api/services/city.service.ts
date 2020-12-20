import { Throwable } from 'src/common/error/throwable';
import api from '../api.helper';
import { CityModel } from '../models/city.model';

const endpoint = 'cities';

export class CityService {
  constructor() {}
  static async getCities(): Promise<CityModel[] | Throwable> {
    const cities = await api.get(endpoint);
    return cities as CityModel[];
  }
}
