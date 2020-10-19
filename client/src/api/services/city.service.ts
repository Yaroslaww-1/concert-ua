import { Throwable } from 'src/common/error/throwable';
import { createRandomString } from 'src/common/string/create-random-string';
import api from '../api.helper';
import { CityModel } from '../models/city.model';

const endpoint = 'dates';

export class CityService {
  constructor() {}
  static async getCities(): Promise<CityModel[] | Throwable> {
    return new Promise((resolve, reject) => {
      const cities: CityModel[] = [];
      for (let i = 0; i < 40; i++) {
        cities.push({
          name: createRandomString(5 + Math.floor(Math.random() * 10)),
          id: `${i}`,
        });
      }
      setTimeout(() => {
        resolve(cities);
      }, 1000);
    });
  }
}
