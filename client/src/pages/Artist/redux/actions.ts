import { ArtistModel } from 'src/api/models/artist.model';
import { EventShortModel } from 'src/api/models/event-short.model';
import { createAsyncAction } from 'src/redux/helpers/actionCreator';

const type = 'ARTIST';

export const fetchArtist = createAsyncAction(type, 'fetchArtist', {
  request: (id: string) => ({ id }),
  success: (artist: ArtistModel) => ({ artist }),
});

export const fetchTickets = createAsyncAction(type, 'fetchTickets', {
  request: (artistId: string) => ({ artistId }),
  success: (tickets: EventShortModel[]) => ({ tickets }),
});
