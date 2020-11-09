import { call, put, all, takeLatest } from 'redux-saga/effects';
import { EventService } from 'src/api/services/event.service';
import { fetchNewEvents } from './actions';

function* fetchNewEventsSaga(action: ReturnType<typeof fetchNewEvents.requestPayload>) {
  try {
    const events = yield call(EventService.getNewEvents);
    yield put(fetchNewEvents.success(events));
  } catch (error) {
    yield put(fetchNewEvents.failure(error));
  }
}

function* watchFetchNewEvents() {
  yield takeLatest(fetchNewEvents.types.request, fetchNewEventsSaga);
}

export default function* fetchNewEventsSagas() {
  yield all([watchFetchNewEvents()]);
}
