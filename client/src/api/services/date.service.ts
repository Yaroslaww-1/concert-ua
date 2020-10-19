import { Throwable } from 'src/common/error/throwable';
import api from '../api.helper';
import { DateModel } from '../models/date.model';

const endpoint = 'dates';

export class DateService {
  constructor() {}
  static async getDates(): Promise<DateModel[] | Throwable> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            date: 'Today',
            isPlainString: true,
            id: '1',
          },
          {
            date: 'Tomorrow',
            isPlainString: true,
            id: '2',
          },
          {
            date: 'This week',
            isPlainString: true,
            id: '3',
          },
          {
            date: 'Next week',
            isPlainString: true,
            id: '4',
          },
          {
            date: 'This month',
            isPlainString: true,
            id: '5',
          },
        ]);
      }, 1000);
    });
  }
}
