import { Throwable } from 'src/common/error/throwable';
import api from '../api.helper';
import { EventModel } from '../models/event.model';

const endpoint = 'events';

const events = [
  {
    id: 'id1',
    name: 'Stringstringstringstringstring',
    description: 'string',
    place: 'string',
    date: 'string',
    imageUrl: 'https://i.imgur.com/RSBQEKD.jpg',
    price: '100uah',
  },
  {
    id: 'id2',
    name: 'String',
    description: 'string',
    place: 'string',
    date: 'string',
    imageUrl: 'https://i.imgur.com/aeBbstI.jpg',
    price: '100uah',
  },
  {
    id: 'id3',
    name: 'String',
    description: 'string',
    place: 'string',
    date: 'string',
    imageUrl: 'https://i.imgur.com/rOZXIQ2.jpg',
    price: '100uah',
  },
  {
    id: 'id4',
    name: 'String',
    description: 'string',
    place: 'string',
    date: 'string',
    imageUrl: 'https://i.imgur.com/iqPWUCF.jpg',
    price: '100uah',
  },
];

const newEvents = [
  {
    id: 'id5',
    name: 'Stringstringstringstringstring',
    description: 'string',
    place: 'string',
    date: 'string',
    imageUrl: 'https://i.imgur.com/RSBQEKD.jpg',
    price: '100uah',
  },
  {
    id: 'id6',
    name: 'String',
    description: 'string',
    place: 'string',
    date: 'string',
    imageUrl: 'https://i.imgur.com/aeBbstI.jpg',
    price: '100uah',
  },
  {
    id: 'id7',
    name: 'String',
    description: 'string',
    place: 'string',
    date: 'string',
    imageUrl: 'https://i.imgur.com/rOZXIQ2.jpg',
    price: '100uah',
  },
  {
    id: 'id8',
    name: 'String',
    description: 'string',
    place: 'string',
    date: 'string',
    imageUrl: 'https://i.imgur.com/iqPWUCF.jpg',
    price: '100uah',
  },
  {
    id: 'id9',
    name: 'Stringstringstringstringstring',
    description: 'string',
    place: 'string',
    date: 'string',
    imageUrl: 'https://i.imgur.com/RSBQEKD.jpg',
    price: '100uah',
  },
  {
    id: 'id10',
    name: 'String',
    description: 'string',
    place: 'string',
    date: 'string',
    imageUrl: 'https://i.imgur.com/aeBbstI.jpg',
    price: '100uah',
  },
  {
    id: 'id11',
    name: 'String',
    description: 'string',
    place: 'string',
    date: 'string',
    imageUrl: 'https://i.imgur.com/rOZXIQ2.jpg',
    price: '100uah',
  },
  {
    id: 'id12',
    name: 'String',
    description: 'string',
    place: 'string',
    date: 'string',
    imageUrl: 'https://i.imgur.com/iqPWUCF.jpg',
    price: '100uah',
  },
];

export class EventService {
  constructor() {}
  static async getEvents(): Promise<EventModel[] | Throwable> {
    console.log('Events fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(events);
      }, 10);
    });
  }
  static async getNewEvents(): Promise<EventModel[] | Throwable> {
    console.log('New events fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...newEvents]);
      }, 10);
    });
  }
  static async getPopularEvents(): Promise<EventModel[] | Throwable> {
    console.log('Popular events fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...newEvents].reverse());
      }, 10);
    });
  }
}
