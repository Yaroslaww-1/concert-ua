import { Throwable } from 'src/common/error/throwable';
import { createRandomString } from 'src/common/string/create-random-string';
import api from '../api.helper';
import { defaultCity } from '../models/city.model';
import { EventModel } from '../models/event.model';
import { defaultPlace, PlaceModel } from '../models/place.model';

const endpoint = 'events';

const getPlace = (): PlaceModel => ({
  id: createRandomString(10),
  name: createRandomString(10),
  city: defaultCity,
  address: 'some address, Kyiv Ukraine',
});

const eventUrls = [
  'https://i.imgur.com/RSBQEKD.jpg',
  'https://i.imgur.com/aeBbstI.jpg',
  'https://i.imgur.com/rOZXIQ2.jpg',
  'https://i.imgur.com/iqPWUCF.jpg',
];
let eventId = 0;
let eventUrlIndex = -1;

const getEvent = (): EventModel => {
  eventId += 1;
  eventUrlIndex += 1;
  eventUrlIndex = eventUrlIndex % 4;
  return {
    id: `id${eventId}`,
    name: createRandomString(10),
    description: 'string',
    place: getPlace(),
    date: new Date(),
    imageUrl: eventUrls[eventUrlIndex],
    price: '100uah',
    tags: [createRandomString(5), createRandomString(5)],
    promoter: 'promoter',
    hot: Math.random() > 0.5,
  };
};

const events: EventModel[] = [
  ...Array(4)
    .fill(0)
    .map(() => getEvent()),
];

const newEvents: EventModel[] = [
  ...Array(10)
    .fill(0)
    .map(() => getEvent()),
];

export interface IEventFilter {
  date?: {
    from: Date;
    to: Date;
  };
  placesIds?: string[];
  stylesIds?: string[];
}

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
