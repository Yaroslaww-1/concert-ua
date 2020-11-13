import { all } from 'redux-saga/effects';
import { fetchEventsSagas } from '../containers/EventsSection/redux/sagas';
import { fetchFilterSagas } from '../containers/Filter/redux/sagas';

export function* fetchConcertsSagas() {
  yield all([fetchFilterSagas(), fetchEventsSagas()]);
}
