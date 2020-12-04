import { UserModel } from 'src/api/models/user.model';
import { ILoginDto } from 'src/api/services/auth.service';
import { createAsyncAction } from 'src/redux/helpers/actionCreator';

const type = 'AUTH';

export const login = createAsyncAction(type, 'login', {
  request: (loginData: ILoginDto) => ({ loginData }),
  success: (response: UserModel | null) => ({ response }),
});

export const register = createAsyncAction(type, 'register', {
  request: (id: string) => ({ id }),
  success: () => ({}),
});
