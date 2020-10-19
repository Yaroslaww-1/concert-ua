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
          },
          {
            date: 'Tomorrow',
            isPlainString: true,
          },
          {
            date: 'This week',
            isPlainString: true,
          },
          {
            date: 'Next week',
            isPlainString: true,
          },
          {
            date: 'This month',
            isPlainString: true,
          },
        ]);
      }, 1000);
    });
  }
}
