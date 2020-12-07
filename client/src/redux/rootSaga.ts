import { all } from 'redux-saga/effects';
import fetchNavbarSagas from 'src/containers/Navbar/redux/sagas';
import fetchHomeSagas from 'src/pages/Home/redux/sagas';
import { fetchProfileSagas } from 'src/pages/Profile/redux/sagas';
import { fetchConcertsSagas } from 'src/pages/Concerts/redux/sagas';
import { fetchEventSagas } from 'src/pages/Event/redux/sagas';
import { fetchArtistSagas } from 'src/pages/Artist/redux/sagas';
import { fetchArtistsSagas } from 'src/pages/Artists/redux/sagas';
import { fetchSubscribeSagas } from 'src/containers/Subscribe/redux/sagas';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function* rootSaga(): Iterator<any, any, undefined> {
  yield all([
    fetchProfileSagas(),
    fetchNavbarSagas(),
    fetchHomeSagas(),
    fetchConcertsSagas(),
    fetchEventSagas(),
    fetchArtistSagas(),
    fetchArtistsSagas(),
    fetchSubscribeSagas(),
  ]);
}
