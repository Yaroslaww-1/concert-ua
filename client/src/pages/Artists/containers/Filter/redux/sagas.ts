import { call, put, all, takeLatest } from 'redux-saga/effects';
import { StyleService } from 'src/api/services/style.service';
import { fetchStyles } from './actions';

function* fetchStylesSaga(action: ReturnType<typeof fetchStyles.requestPayload>) {
  try {
    const styles = yield call(StyleService.getStyles);
    yield put(fetchStyles.success(styles));
  } catch (error) {
    yield put(fetchStyles.failure(error));
  }
}

function* watchFetchStyles() {
  yield takeLatest(fetchStyles.types.request, fetchStylesSaga);
}

export function* fetchFilterSagas() {
  yield all([watchFetchStyles()]);
}
