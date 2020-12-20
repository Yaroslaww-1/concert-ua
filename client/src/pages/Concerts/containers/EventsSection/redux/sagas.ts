import { call, put, all, takeLatest } from 'redux-saga/effects';
import { fetchEvents, paginationActions } from './actions';
import { EventService, IEventFilter } from 'src/api/services/event.service';
import { parseUrlParams } from 'src/common/url/qs-helper';
import { createPaginationSagas } from 'src/redux/helpers/paginationHelperCreator';

function* fetchEventsSaga(action: ReturnType<typeof fetchEvents.requestPayload>) {
  try {
    const filter = parseUrlParams<IEventFilter>(window.location.search);
    const events = yield call(EventService.getEvents, filter);
    yield put(fetchEvents.success(events));
  } catch (error) {
    yield put(fetchEvents.failure(error));
  }
}

function* watchFetchEvents() {
  yield takeLatest(fetchEvents.types.request, fetchEventsSaga);
}

const { watchPagination } = createPaginationSagas({
  loadMoreAction: paginationActions.loadMore,
  getCurrentPaginationState: (state) => state.concerts.events.pagination,
  fetchItems: (paginationFilter) =>
    EventService.getEvents({ ...parseUrlParams<IEventFilter>(window.location.search), ...paginationFilter }),
  fetchItemsAction: fetchEvents,
});

export function* fetchEventsSagas() {
  yield all([watchFetchEvents(), watchPagination()]);
}
