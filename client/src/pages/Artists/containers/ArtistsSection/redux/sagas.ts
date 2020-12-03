import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { fetchArtists } from './actions';
import { RootState } from 'src/redux/rootReducer';
import { ArtistService } from 'src/api/services/artist.service';

function* fetchArtistsSaga(action: ReturnType<typeof fetchArtists.requestPayload>) {
  try {
    const filter = yield select((state: RootState) => state.artists.filter.state);
    const artists = yield call(ArtistService.getArtists, filter);
    yield put(fetchArtists.success(artists));
  } catch (error) {
    yield put(fetchArtists.failure(error));
  }
}

function* watchFetchArtists() {
  yield takeLatest(fetchArtists.types.request, fetchArtistsSaga);
}

export function* fetchArtistsSagas() {
  yield all([watchFetchArtists()]);
}
