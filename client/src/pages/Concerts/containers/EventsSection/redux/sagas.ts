import { call, put, all, takeLatest } from 'redux-saga/effects';
import { fetchEvents as fetchEventsAction, paginationActions } from './actions';
import { EventService, IEventFilter, PopularRecentFilter } from 'src/api/services/event.service';
import { parseUrlParams } from 'src/common/url/qs-helper';
import { createPaginationSagas } from 'src/redux/helpers/paginationHelperCreator';

const fetchEvents = async (paginationFilter?: { offset: number; limit: number }) => {
  const filter = { ...parseUrlParams<IEventFilter>(window.location.search), ...(paginationFilter || {}) };
  if (filter.type && filter.type === PopularRecentFilter.popular) {
    const events = await EventService.getPopularEvents(filter);
    return events;
  }
  const events = await EventService.getNewEvents(filter);
  return events;
};

function* fetchEventsSaga(action: ReturnType<typeof fetchEventsAction.requestPayload>) {
  try {
    const events = yield call(fetchEvents);
    yield put(fetchEventsAction.success(events));
  } catch (error) {
    yield put(fetchEventsAction.failure(error));
  }
}

function* watchFetchEvents() {
  yield takeLatest(fetchEventsAction.types.request, fetchEventsSaga);
}

const { watchPagination } = createPaginationSagas({
  loadMoreAction: paginationActions.loadMore,
  getCurrentPaginationState: (state) => state.concerts.events.pagination,
  fetchItems: (paginationFilter) => fetchEvents(paginationFilter),
  fetchItemsAction: fetchEventsAction,
});

export function* fetchEventsSagas() {
  yield all([watchFetchEvents(), watchPagination()]);
}
