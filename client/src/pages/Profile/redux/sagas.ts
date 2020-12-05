import { all } from 'redux-saga/effects';
import { fetchUserLikedEventsSagas } from '../containers/LikedEventsByUser/redux/sagas';
import fetchUserSagas from '../containers/PersonalInfo/redux/sagas';

export function* fetchProfileSagas() {
  yield all([fetchUserSagas(), fetchUserLikedEventsSagas()]);
}
