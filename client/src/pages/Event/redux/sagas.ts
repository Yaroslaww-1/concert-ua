import { call, put, all, takeLatest } from 'redux-saga/effects';
import { EventService } from 'src/api/services/event.service';
import { fetchEvent, fetchPopularEvents } from './actions';

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

function* fetchPopularEventsSaga(action: ReturnType<typeof fetchPopularEvents.requestPayload>) {
  try {
    const events = yield call(EventService.getPopularEvents);
    yield put(fetchPopularEvents.success(events));
  } catch (error) {
    yield put(fetchPopularEvents.failure(error));
  }
}

function* watchFetchPopularEvents() {
  yield takeLatest(fetchPopularEvents.types.request, fetchPopularEventsSaga);
}

export function* fetchEventSagas() {
  yield all([watchFetchEvent(), watchFetchPopularEvents()]);
}
