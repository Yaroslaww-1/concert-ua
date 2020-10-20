import { all } from 'redux-saga/effects';
import fetchNavbarSagas from 'src/containers/Navbar/redux/sagas';
import fetchUserSagas from 'src/pages/Profile/redux/sagas';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function* rootSaga(): Iterator<any, any, undefined> {
  yield all([fetchUserSagas(), fetchNavbarSagas()]);
}
