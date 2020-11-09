import { all } from 'redux-saga/effects';
import fetchNewEventsSagas from 'src/containers/NewEvents/redux/sagas';
import fetchPopularEventsSagas from 'src/containers/PopularEvents/redux/sagas';

export default function* fetchHomeSagas() {
  yield all([fetchNewEventsSagas(), fetchPopularEventsSagas()]);
}
