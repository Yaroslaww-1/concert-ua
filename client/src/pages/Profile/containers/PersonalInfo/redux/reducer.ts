import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { UserModel } from 'src/api/models/user.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';
import { fetchUser, updateUser } from './actions';

export type ProfileUserState = {
  user: UserModel | null;
};

const state = createReducer<ProfileUserState>(
  { user: null },
  {
    [fetchUser.successAction.type]: (state, action: ReturnType<typeof fetchUser.successPayload>) => {
      state.user = action.payload.user;
    },
    [updateUser.successAction.type]: (state, action: ReturnType<typeof updateUser.successPayload>) => {
      state.user = action.payload.user;
    },
  },
);

const userReducer = combineReducers({
  state,
  loading: createLoadingReducer([fetchUser, updateUser], true),
});

export default userReducer;
