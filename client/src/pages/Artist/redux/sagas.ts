import { call, put, all, takeLatest } from 'redux-saga/effects';
import { ArtistService } from 'src/api/services/artist.service';
import { fetchArtist, fetchTickets } from './actions';

function* fetchArtistSaga(action: ReturnType<typeof fetchArtist.requestPayload>) {
  try {
    const artist = yield call(ArtistService.getArtistById, action.payload.id);
    yield put(fetchArtist.success(artist));
  } catch (error) {
    yield put(fetchArtist.failure(error));
  }
}

function* watchFetchArtist() {
  yield takeLatest(fetchArtist.types.request, fetchArtistSaga);
}

function* fetchTicketsSaga(action: ReturnType<typeof fetchTickets.requestPayload>) {
  try {
    const tickets = yield call(ArtistService.getTicketsByArtistId, action.payload.artistId);
    yield put(fetchTickets.success(tickets));
  } catch (error) {
    yield put(fetchTickets.failure(error));
  }
}

function* watchFetchTickets() {
  yield takeLatest(fetchTickets.types.request, fetchTicketsSaga);
}

export function* fetchArtistSagas() {
  yield all([watchFetchArtist(), watchFetchTickets()]);
}
