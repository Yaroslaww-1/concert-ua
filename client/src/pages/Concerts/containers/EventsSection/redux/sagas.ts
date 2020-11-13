import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { fetchEvents } from './actions';
import { EventService } from 'src/api/services/event.service';
import { RootState } from 'src/redux/rootReducer';

function* fetchEventsSaga(action: ReturnType<typeof fetchEvents.requestPayload>) {
  try {
    const filter = yield select((state: RootState) => state.concerts.filter.state);
    const events = yield call(EventService.getEvents, filter);
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
