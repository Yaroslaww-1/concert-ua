import { call, put, all, takeLatest } from 'redux-saga/effects';
import { CityService } from 'src/api/services/city.service';
import { fetchCities } from './actions';

function* fetchCitiesSaga(action: ReturnType<typeof fetchCities.requestPayload>) {
  try {
    const cities = yield call(CityService.getCities);
    yield put(fetchCities.success(cities));
  } catch (error) {
    yield put(fetchCities.failure(error));
  }
}

function* watchFetchCities() {
  yield takeLatest(fetchCities.types.request, fetchCitiesSaga);
}

export default function* fetchNavbarSagas() {
  yield all([watchFetchCities()]);
}
