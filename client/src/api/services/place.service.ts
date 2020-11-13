import { Throwable } from 'src/common/error/throwable';
import api from '../api.helper';
import { PlaceModel } from '../models/place.model';

const endpoint = 'events';

const places: PlaceModel[] = [...new Array(20)].map((_, index) => ({
  id: index.toString(),
  name: `place${index}`,
  city: {
    id: index.toString(),
    name: `place${index}`,
  },
}));

export class PlaceService {
  constructor() {}
  static async getPlaces(): Promise<PlaceModel[] | Throwable> {
    console.log('Places fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(places);
      }, 10);
    });
  }
}
