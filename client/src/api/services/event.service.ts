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
            id: 'string',
            name: 'stringstringstringstringstring',
            description: 'string',
            place: 'string',
            date: 'string',
            imageUrl: 'https://storage.concert.ua/Jnt/15/jj/5f8807e64ec54/eca7.jpg:31-mainpage-megabanner-desktop',
            price: '100uah',
          },
          {
            id: 'string',
            name: 'string',
            description: 'string',
            place: 'string',
            date: 'string',
            imageUrl: 'https://storage.concert.ua/Jnw/19/va/5f3d3834d9498/94e0.jpg:31-mainpage-megabanner-desktop',
            price: '100uah',
          },
          {
            id: 'string',
            name: 'string',
            description: 'string',
            place: 'string',
            date: 'string',
            imageUrl: 'https://storage.concert.ua/Jnt/7/h2/5f7dc1e061fe9/201d.jpg:31-mainpage-megabanner-desktop',
            price: '100uah',
          },
          {
            id: 'string',
            name: 'string',
            description: 'string',
            place: 'string',
            date: 'string',
            imageUrl: 'https://storage.concert.ua/Jnt/9/o2/5f80632e245c9/461e.jpg:31-mainpage-megabanner-desktop',
            price: '100uah',
          },
        ]);
      }, 10);
    });
  }
}
