import { defaultPlace, PlaceModel } from './place.model';

export type EventModel = {
  id: string;
  name: string;
  description: string;
  place: PlaceModel;
  date: Date;
  imageUrl: string;
  price: string;
  tags: string[];
};

export const defaultEvent: EventModel = {
  id: '',
  name: '',
  description: '',
  place: defaultPlace,
  date: new Date(),
  imageUrl: '',
  price: '',
  tags: [],
};
