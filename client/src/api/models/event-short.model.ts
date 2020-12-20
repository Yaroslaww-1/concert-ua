import { defaultPlace, PlaceModel } from './place.model';

export type EventShortModel = {
  id: number;
  name: string;
  place: PlaceModel;
  date: Date;
  price: string;
  promoter: string;
  hot: boolean;
};

export const defaultEventTicket: EventShortModel = {
  id: 0,
  name: '',
  place: defaultPlace,
  date: new Date(),
  price: '',
  promoter: '',
  hot: false,
};
