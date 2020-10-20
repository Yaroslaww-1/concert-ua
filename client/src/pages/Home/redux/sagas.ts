import { call, put, all, takeLatest } from 'redux-saga/effects';
import { EventService } from 'src/api/services/event.service';
import { fetchEvents } from './actions';

function* fetchEventsSaga(action: ReturnType<typeof fetchEvents.requestPayload>) {
  try {
    const events = yield call(EventService.getEvents);
    yield put(fetchEvents.success(events));
  } catch (error) {
    yield put(fetchEvents.failure(error));
  }
}

function* watchFetchEvents() {
  yield takeLatest(fetchEvents.types.request, fetchEventsSaga);
}

export default function* fetchHomeSagas() {
  yield all([watchFetchEvents()]);
}
