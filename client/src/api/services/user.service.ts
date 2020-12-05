import { Throwable } from 'src/common/error/throwable';
import api from '../api.helper';
import { defaultUser, UserModel } from '../models/user.model';

const endpoint = 'user';

export type IUpdateUserDto = UserModel & { password?: string };

export class UserService {
  constructor() {}
  static async getUser(): Promise<UserModel | null | Throwable> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(defaultUser);
      }, 1000);
    });
  }

  static async updateUser(newUserDto: IUpdateUserDto): Promise<UserModel | null | Throwable> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(defaultUser);
      }, 1000);
    });
  }
}
