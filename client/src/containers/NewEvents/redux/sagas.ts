import { call, put, all, takeLatest } from 'redux-saga/effects';
import { EventService } from 'src/api/services/event.service';
import { createPaginationSagas } from 'src/redux/helpers/paginationHelperCreator';
import { fetchNewEvents, paginationActions } from './actions';

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

const { watchPagination } = createPaginationSagas({
  loadMoreAction: paginationActions.loadMore,
  getCurrentPaginationState: (state) => state.home.newEvents.pagination,
  fetchItems: (paginationFilter) => EventService.getNewEvents(paginationFilter),
  fetchItemsAction: fetchNewEvents,
});

export default function* fetchNewEventsSagas() {
  yield all([watchFetchNewEvents(), watchPagination()]);
}
