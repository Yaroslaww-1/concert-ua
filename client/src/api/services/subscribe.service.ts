import api from '../api.helper';

const endpoint = 'artists';

export class SubscribeService {
  constructor() {}
  static async subscribe(email: string): Promise<void> {
    console.log('subscribe fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 10);
    });
  }
}
