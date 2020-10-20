import { call, put, all, takeLatest } from 'redux-saga/effects';
import { UserService } from 'src/api/services/user.service';
import { fetchUser } from './actions';

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

export default function* fetchUserSagas() {
  yield all([watchFetchUser()]);
}
