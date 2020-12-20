import { call, put, all, takeLatest } from 'redux-saga/effects';
import { fetchArtists } from './actions';
import { ArtistService, IArtistFilter } from 'src/api/services/artist.service';
import { parseUrlParams } from 'src/common/url/qs-helper';

function* fetchArtistsSaga(action: ReturnType<typeof fetchArtists.requestPayload>) {
  try {
    const filter = parseUrlParams<IArtistFilter>(window.location.search);
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
