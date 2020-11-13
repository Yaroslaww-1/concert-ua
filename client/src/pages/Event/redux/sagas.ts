import { call, put, all, takeLatest } from 'redux-saga/effects';
import { EventService } from 'src/api/services/event.service';
import { fetchEvent } from './actions';

function* fetchEventSaga(action: ReturnType<typeof fetchEvent.requestPayload>) {
  try {
    const event = yield call(EventService.getEventById, action.payload.id);
    yield put(fetchEvent.success(event));
  } catch (error) {
    yield put(fetchEvent.failure(error));
  }
}

function* watchFetchEvent() {
  yield takeLatest(fetchEvent.types.request, fetchEventSaga);
}

export function* fetchEventSagas() {
  yield all([watchFetchEvent()]);
}
