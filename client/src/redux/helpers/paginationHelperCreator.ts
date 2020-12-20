/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionCreatorWithoutPayload, createAction, createReducer } from '@reduxjs/toolkit';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { RootState } from '../rootReducer';
import { AsyncFunction } from './actionCreator';

export type PaginationActions = ReturnType<typeof createPaginationActions>;

export const createPaginationActions = (type: string) => {
  const loadMore = createAction<void>(`${type}/PAGINATION_LOAD_MORE`);
  const reset = createAction<void>(`${type}/PAGINATION_RESET`);
  return { loadMore, reset };
};

export const createPaginationReducer = ({
  actions,
  defaultOffset = 0,
  defaultLimit = 8,
  step,
}: {
  actions: PaginationActions;
  defaultOffset?: number;
  defaultLimit?: number;
  step: number;
}) => {
  const actionsMap: Record<string, any> = {};
  actionsMap[actions.loadMore.type] = (
    state: { offset: number; limit: number },
    action: ReturnType<typeof actions.loadMore>,
  ) => {
    console.log('increase limit', state.limit, state.offset);
    state.limit = state.limit + step;
  };
  actionsMap[actions.reset.type] = (
    state: { offset: number; limit: number },
    action: ReturnType<typeof actions.reset>,
  ) => {
    console.log('reset', state.limit, state.offset);
    state.limit = defaultLimit;
    state.offset = defaultOffset;
  };
  const pagination = createReducer<{ offset: number; limit: number }>(
    { offset: defaultOffset, limit: defaultLimit },
    actionsMap,
  );
  return pagination;
};

export const createPaginationSagas = ({
  loadMoreAction,
  getCurrentPaginationState,
  fetchItems,
  fetchItemsAction,
}: {
  loadMoreAction: ActionCreatorWithoutPayload<string>;
  getCurrentPaginationState: (state: RootState) => { offset: number; limit: number };
  fetchItems: (paginationFilter: { offset: number; limit: number }) => void;
  fetchItemsAction: AsyncFunction;
}) => {
  function* paginationSaga(action: ReturnType<typeof loadMoreAction>) {
    try {
      const paginationFilter = yield select(getCurrentPaginationState);
      const items = yield call(fetchItems, paginationFilter);
      yield put(fetchItemsAction.success(items));
    } catch (error) {
      yield put(fetchItemsAction.failure(error));
    }
  }

  function* watchPagination() {
    yield takeLatest(loadMoreAction.type, paginationSaga);
  }

  return { watchPagination };
};
