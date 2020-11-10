import { all } from 'redux-saga/effects';
import { fetchFilterSagas } from '../containers/Filter/redux/sagas';

export function* fetchConcertsSagas() {
  yield all([fetchFilterSagas()]);
}
