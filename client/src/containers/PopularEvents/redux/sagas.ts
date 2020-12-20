import { call, put, all, takeLatest } from 'redux-saga/effects';
import { EventService } from 'src/api/services/event.service';
import { createPaginationSagas } from 'src/redux/helpers/paginationHelperCreator';
import { fetchPopularEvents, paginationActions } from './actions';

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

const { watchPagination } = createPaginationSagas({
  loadMoreAction: paginationActions.loadMore,
  getCurrentPaginationState: (state) => state.home.popularEvents.pagination,
  fetchItems: (paginationFilter) => EventService.getPopularEvents(paginationFilter),
  fetchItemsAction: fetchPopularEvents,
});

export default function* fetchPopularEventsSagas() {
  yield all([watchFetchPopularEvents(), watchPagination()]);
}
