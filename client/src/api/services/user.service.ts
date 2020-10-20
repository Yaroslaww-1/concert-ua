import { Throwable } from 'src/common/error/throwable';
import api from '../api.helper';
import { UserModel } from '../models/user.model';

const endpoint = 'user';

export class UserService {
  constructor() {}
  static async getUser(): Promise<UserModel | null | Throwable> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, 1000);
    });
  }
}
