import { Throwable } from 'src/common/error/throwable';
import api from '../api.helper';
import { StyleModel } from '../models/style.model';

const endpoint = 'styles';

export class StyleService {
  constructor() {}
  static async getStyles(): Promise<StyleModel[] | Throwable> {
    const styles = await api.get(endpoint);
    return styles as StyleModel[];
  }
}
