import { Throwable } from 'src/common/error/throwable';
import api from '../api.helper';
import { PlaceModel } from '../models/place.model';

const endpoint = 'places';

export class PlaceService {
  constructor() {}
  static async getPlaces(): Promise<PlaceModel[] | Throwable> {
    const places = await api.get(endpoint);
    return places as PlaceModel[];
  }
}
