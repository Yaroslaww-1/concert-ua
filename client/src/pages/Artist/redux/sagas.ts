import { call, put, all, takeLatest } from 'redux-saga/effects';
import { ArtistService } from 'src/api/services/artist.service';
import { fetchArtist } from './actions';

function* fetchArtistSaga(action: ReturnType<typeof fetchArtist.requestPayload>) {
  try {
    const artist = yield call(ArtistService.getArtistById, action.payload.id);
    yield put(fetchArtist.success(artist));
  } catch (error) {
    yield put(fetchArtist.failure(error));
  }
}

function* watchFetchEvent() {
  yield takeLatest(fetchArtist.types.request, fetchArtistSaga);
}

export function* fetchArtistSagas() {
  yield all([watchFetchEvent()]);
}
