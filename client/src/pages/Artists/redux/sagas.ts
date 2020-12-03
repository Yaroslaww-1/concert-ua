import { all } from 'redux-saga/effects';
import { fetchArtistsSagas as _fetchArtistsSagas } from '../containers/ArtistsSection/redux/sagas';
import { fetchFilterSagas } from '../containers/Filter/redux/sagas';

export function* fetchArtistsSagas() {
  yield all([fetchFilterSagas(), _fetchArtistsSagas()]);
}
