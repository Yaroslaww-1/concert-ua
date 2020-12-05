import { UserModel } from 'src/api/models/user.model';
import { IUpdateUserDto } from 'src/api/services/user.service';
import { createAsyncAction } from 'src/redux/helpers/actionCreator';

const type = 'PROFILE';

export const fetchUser = createAsyncAction(type, 'USER', {
  request: () => ({}),
  success: (user: UserModel) => ({ user }),
});

export const updateUser = createAsyncAction(type, 'USER', {
  request: (userDate: IUpdateUserDto) => ({ userDate }),
  success: (user: UserModel) => ({ user }),
});
