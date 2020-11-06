import { Throwable } from 'src/common/error/throwable';
import api from '../api.helper';
import { EventModel } from '../models/event.model';

const endpoint = 'events';

export class EventService {
  constructor() {}
  static async getEvents(): Promise<EventModel[] | Throwable> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 'string11',
            name: 'Stringstringstringstringstring',
            description: 'string',
            place: 'string',
            date: 'string',
            imageUrl: 'https://i.imgur.com/RSBQEKD.jpg',
            price: '100uah',
          },
          {
            id: 'string22',
            name: 'String',
            description: 'string',
            place: 'string',
            date: 'string',
            imageUrl: 'https://i.imgur.com/aeBbstI.jpg',
            price: '100uah',
          },
          {
            id: 'string33',
            name: 'String',
            description: 'string',
            place: 'string',
            date: 'string',
            imageUrl: 'https://i.imgur.com/rOZXIQ2.jpg',
            price: '100uah',
          },
          {
            id: 'string44',
            name: 'String',
            description: 'string',
            place: 'string',
            date: 'string',
            imageUrl: 'https://i.imgur.com/iqPWUCF.jpg',
            price: '100uah',
          },
        ]);
      }, 10);
    });
  }
}
