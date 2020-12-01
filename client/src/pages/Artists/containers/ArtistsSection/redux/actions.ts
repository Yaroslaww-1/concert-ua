import { createAsyncAction } from 'src/redux/helpers/actionCreator';
import { ArtistModel } from 'src/api/models/artist.model';

const type = 'ARTISTS/ARTISTS';

export const fetchArtists = createAsyncAction(type, 'ARTISTS', {
  request: () => ({}),
  success: (artists: ArtistModel[]) => ({ artists }),
});
