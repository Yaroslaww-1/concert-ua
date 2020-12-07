import { call, put, all, takeLatest } from 'redux-saga/effects';
import { SubscribeService } from 'src/api/services/subscribe.service';
import { fetchSubscribe } from './actions';

function* fetchSubscribeSaga(action: ReturnType<typeof fetchSubscribe.requestPayload>) {
  try {
    yield call(SubscribeService.subscribe, action.payload.email);
    yield put(fetchSubscribe.success());
  } catch (error) {
    yield put(fetchSubscribe.failure(error));
  }
}

function* watchFetchSubscribeSaga() {
  yield takeLatest(fetchSubscribe.types.request, fetchSubscribeSaga);
}

export function* fetchSubscribeSagas() {
  yield all([watchFetchSubscribeSaga()]);
}
