import { call, put, all, takeLatest } from 'redux-saga/effects';
import { StyleService } from 'src/api/services/style.service';
import { PlaceService } from 'src/api/services/place.service';
import { fetchStyles, fetchPlaces } from './actions';

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

function* fetchPlacesSaga(action: ReturnType<typeof fetchPlaces.requestPayload>) {
  try {
    const places = yield call(PlaceService.getPlaces);
    yield put(fetchPlaces.success(places));
  } catch (error) {
    yield put(fetchPlaces.failure(error));
  }
}

function* watchFetchPlaces() {
  yield takeLatest(fetchPlaces.types.request, fetchPlacesSaga);
}

export function* fetchFilterSagas() {
  yield all([watchFetchStyles(), watchFetchPlaces()]);
}
