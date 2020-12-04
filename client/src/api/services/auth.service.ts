import { Throwable } from 'src/common/error/throwable';
import api from '../api.helper';
import { defaultUser, UserModel } from '../models/user.model';

const endpoint = 'auth';

export interface ILoginDto {
  login: string;
  password: string;
}

export class AuthService {
  constructor() {}
  static async login(loginData: ILoginDto): Promise<UserModel | null | Throwable> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(defaultUser);
      }, 1000);
    });
  }
}
