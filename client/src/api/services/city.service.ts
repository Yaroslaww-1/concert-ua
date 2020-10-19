import { Throwable } from 'src/common/error/throwable';
import api from '../api.helper';
import { CityModel } from '../models/city.model';

const endpoint = 'dates';

export class CityService {
  constructor() {}
  static async getCities(): Promise<CityModel[] | Throwable> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            name: 'Kyiv',
          },
          {
            name: 'Odessa',
          },
          {
            name: 'Lviv',
          },
          {
            name: 'Mykolaiv',
          },
          {
            name: 'Dnipro',
          },
        ]);
      }, 1000);
    });
  }
}
