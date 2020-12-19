import api from '../api.helper';
import { ArtistModel } from '../models/artist.model';
import { EventModel } from '../models/event.model';

const endpoint = 'artists';

export interface IArtistFilter {
  stylesIds?: number[];
  name?: string;
}

export class ArtistService {
  constructor() {}
  static async getArtists(filter: IArtistFilter = {}): Promise<ArtistModel[]> {
    const artists = await api.get(endpoint);
    return artists as ArtistModel[];
  }

  static async getArtistById(id: string): Promise<ArtistModel> {
    const artist = await api.get(`${endpoint}/${id}`);
    return artist as ArtistModel;
  }

  static async getTicketsByArtistId(artistId: string): Promise<EventModel[]> {
    return [];
    // console.log('Artist tickets fetching');
    // const allEvents = await EventService.getEvents();
    // return [
    //   ...allEvents.filter((event) => event.artist.id === artistId),
    //   ...allEvents.filter((event) => event.artist.id === artistId),
    // ];
  }
}
