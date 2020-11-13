import { Throwable } from 'src/common/error/throwable';
import { createRandomString } from 'src/common/string/create-random-string';
import api from '../api.helper';
import { defaultCity } from '../models/city.model';
import { EventModel } from '../models/event.model';
import { defaultPlace, PlaceModel } from '../models/place.model';

const endpoint = 'events';

const getPlace = (): PlaceModel => ({ id: createRandomString(10), name: createRandomString(10), city: defaultCity });

const events: EventModel[] = [
  {
    id: 'id1',
    name: 'Stringstringstringstringstring',
    description: 'string',
    place: getPlace(),
    date: new Date(),
    imageUrl: 'https://i.imgur.com/RSBQEKD.jpg',
    price: '100uah',
    tags: [createRandomString(5), createRandomString(5)],
  },
  {
    id: 'id2',
    name: 'String',
    description: 'string',
    place: getPlace(),
    date: new Date(),
    imageUrl: 'https://i.imgur.com/aeBbstI.jpg',
    price: '100uah',
    tags: [createRandomString(5), createRandomString(5)],
  },
  {
    id: 'id3',
    name: 'String',
    description: 'string',
    place: getPlace(),
    date: new Date(),
    imageUrl: 'https://i.imgur.com/rOZXIQ2.jpg',
    price: '100uah',
    tags: [createRandomString(5), createRandomString(5)],
  },
  {
    id: 'id4',
    name: 'String',
    description: 'string',
    place: getPlace(),
    date: new Date(),
    imageUrl: 'https://i.imgur.com/iqPWUCF.jpg',
    price: '100uah',
    tags: [createRandomString(5), createRandomString(5)],
  },
];

const newEvents: EventModel[] = [
  {
    id: 'id5',
    name: 'Stringstringstringstringstring',
    description: 'string',
    place: getPlace(),
    date: new Date(),
    imageUrl: 'https://i.imgur.com/RSBQEKD.jpg',
    price: '100uah',
    tags: [createRandomString(5), createRandomString(5)],
  },
  {
    id: 'id6',
    name: 'String',
    description: 'string',
    place: getPlace(),
    date: new Date(),
    imageUrl: 'https://i.imgur.com/aeBbstI.jpg',
    price: '100uah',
    tags: [createRandomString(5), createRandomString(5)],
  },
  {
    id: 'id7',
    name: 'String',
    description: 'string',
    place: getPlace(),
    date: new Date(),
    imageUrl: 'https://i.imgur.com/rOZXIQ2.jpg',
    price: '100uah',
    tags: [createRandomString(5), createRandomString(5)],
  },
  {
    id: 'id8',
    name: 'String',
    description: 'string',
    place: getPlace(),
    date: new Date(),
    imageUrl: 'https://i.imgur.com/iqPWUCF.jpg',
    price: '100uah',
    tags: [createRandomString(5), createRandomString(5)],
  },
  {
    id: 'id9',
    name: 'Stringstringstringstringstring',
    description: 'string',
    place: getPlace(),
    date: new Date(),
    imageUrl: 'https://i.imgur.com/RSBQEKD.jpg',
    price: '100uah',
    tags: [createRandomString(5), createRandomString(5)],
  },
  {
    id: 'id10',
    name: 'String',
    description: 'string',
    place: getPlace(),
    date: new Date(),
    imageUrl: 'https://i.imgur.com/aeBbstI.jpg',
    price: '100uah',
    tags: [createRandomString(5), createRandomString(5)],
  },
  {
    id: 'id11',
    name: 'String',
    description: 'string',
    place: getPlace(),
    date: new Date(),
    imageUrl: 'https://i.imgur.com/rOZXIQ2.jpg',
    price: '100uah',
    tags: [createRandomString(5), createRandomString(5)],
  },
  {
    id: 'id12',
    name: 'String',
    description: 'string',
    place: getPlace(),
    date: new Date(),
    imageUrl: 'https://i.imgur.com/iqPWUCF.jpg',
    price: '100uah',
    tags: [createRandomString(5), createRandomString(5)],
  },
];

export interface IEventFilter {
  date?: {
    from: Date;
    to: Date;
  };
  placesIds?: string[];
  stylesIds?: string[];
}

const isEventValid = (event: EventModel, filter: IEventFilter): boolean => {
  return true;
};

export class EventService {
  constructor() {}
  static async getEvents(filter: IEventFilter = {}): Promise<EventModel[]> {
    console.log('Events fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(events);
      }, 10);
    });
  }

  static async getNewEvents(): Promise<EventModel[]> {
    console.log('New events fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...newEvents]);
      }, 10);
    });
  }

  static async getPopularEvents(): Promise<EventModel[]> {
    console.log('Popular events fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...newEvents].reverse());
      }, 10);
    });
  }

  static async getEventById(id: string): Promise<EventModel> {
    console.log('Event fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const event = events.find((event) => event.id === id);
        if (!event) {
          return reject(new Error('event with given id was not found'));
        }
        resolve(event);
      }, 10);
    });
  }
}
