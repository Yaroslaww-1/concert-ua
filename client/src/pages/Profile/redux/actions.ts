import { UserModel } from 'src/api/models/user.model';
import { createAsyncAction } from 'src/redux/helpers/actionCreator';

export const fetchUser = createAsyncAction('PROFILE', 'USER', {
  request: () => ({}),
  success: (user: UserModel) => ({ user }),
});
