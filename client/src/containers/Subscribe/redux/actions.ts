import { createAsyncAction } from 'src/redux/helpers/actionCreator';

export const fetchSubscribe = createAsyncAction('SUBSCRIBE', 'FETCH_SUBSCRIBE', {
  request: (email: string) => ({ email }),
  success: () => ({}),
});
