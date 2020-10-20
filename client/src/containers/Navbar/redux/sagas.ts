import { call, put, all, takeLatest } from 'redux-saga/effects';
import { CityService } from 'src/api/services/city.service';
import { DateService } from 'src/api/services/date.service';
import { fetchCities, fetchDates } from './actions';

function* fetchDatesSaga(action: ReturnType<typeof fetchDates.requestPayload>) {
  try {
    const dates = yield call(DateService.getDates);
    yield put(fetchDates.success(dates));
  } catch (error) {
    yield put(fetchDates.failure(error));
  }
}

function* watchFetchDates() {
  yield takeLatest(fetchDates.types.request, fetchDatesSaga);
}

function* fetchCitiesSaga(action: ReturnType<typeof fetchDates.requestPayload>) {
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
  yield all([watchFetchDates(), watchFetchCities()]);
}
