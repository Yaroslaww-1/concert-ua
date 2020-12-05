import { call, put, all, takeLatest } from 'redux-saga/effects';
import { UserService } from 'src/api/services/user.service';
import { fetchUserLikedEvents } from './actions';

function* fetchLikedEventsSaga(action: ReturnType<typeof fetchUserLikedEvents.requestPayload>) {
  try {
    const events = yield call(UserService.getLikedEvents, action.payload.userId);
    yield put(fetchUserLikedEvents.success(events));
  } catch (error) {
    yield put(fetchUserLikedEvents.failure(error));
  }
}

function* watchFetchLikedEventsSaga() {
  yield takeLatest(fetchUserLikedEvents.types.request, fetchLikedEventsSaga);
}

export function* fetchUserLikedEventsSagas() {
  yield all([watchFetchLikedEventsSaga()]);
}
