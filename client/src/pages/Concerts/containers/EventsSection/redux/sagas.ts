import { call, put, all, takeLatest } from 'redux-saga/effects';
import { fetchEvents } from './actions';
import { EventService } from 'src/api/services/event.service';

function* fetchEventsSaga(action: ReturnType<typeof fetchEvents.requestPayload>) {
  try {
    const events = yield call(EventService.getEvents, action.payload.filter);
    yield put(fetchEvents.success(events));
  } catch (error) {
    yield put(fetchEvents.failure(error));
  }
}

function* watchFetchEvents() {
  yield takeLatest(fetchEvents.types.request, fetchEventsSaga);
}

export function* fetchEventsSagas() {
  yield all([watchFetchEvents()]);
}
