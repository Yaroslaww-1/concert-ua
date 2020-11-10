import { Throwable } from 'src/common/error/throwable';
import api from '../api.helper';
import { StyleModel } from '../models/style.model';

const endpoint = 'events';

const styles = [...new Array(20)].map((_, index) => ({ id: index.toString(), name: `style${index}` }));

export class StyleService {
  constructor() {}
  static async getStyles(): Promise<StyleModel[] | Throwable> {
    console.log('Styles fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(styles);
      }, 10);
    });
  }
}
