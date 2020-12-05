import { call, put, all, takeLatest } from 'redux-saga/effects';
import { UserService } from 'src/api/services/user.service';
import { fetchUser, updateUser } from './actions';

function* fetchUserSaga(action: ReturnType<typeof fetchUser.requestPayload>) {
  try {
    const user = yield call(UserService.getUser);
    yield put(fetchUser.success(user));
  } catch (error) {
    yield put(fetchUser.failure(error));
  }
}

function* watchFetchUser() {
  yield takeLatest(fetchUser.types.request, fetchUserSaga);
}

function* updateUserSaga(action: ReturnType<typeof updateUser.requestPayload>) {
  try {
    const newUser = yield call(UserService.updateUser, action.payload.userDate);
    yield put(updateUser.success(newUser));
  } catch (error) {
    yield put(updateUser.failure(error));
  }
}

function* watchUpdateUserSaga() {
  yield takeLatest(updateUser.types.request, updateUserSaga);
}

export default function* fetchUserSagas() {
  yield all([watchFetchUser(), watchUpdateUserSaga()]);
}
