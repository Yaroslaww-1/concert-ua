import api from '../api.helper';
import { ArtistModel } from '../models/artist.model';
import { EventShortModel } from '../models/event-short.model';
import { EventService } from './event.service';

const endpoint = 'artists';

export interface IArtistFilter {
  stylesIds?: number[];
  name?: string;
}

export class ArtistService {
  constructor() {}
  static async getArtists(filter: IArtistFilter = {}): Promise<ArtistModel[]> {
    const artists = (await api.get<ArtistModel[]>(endpoint, filter)) as ArtistModel[];
    return artists;
  }

  static async getArtistById(id: string): Promise<ArtistModel> {
    const artist = await api.get(`${endpoint}/${id}`);
    return artist as ArtistModel;
  }

  static async getTicketsByArtistId(artistId: string): Promise<EventShortModel[]> {
    const events = (await api.get<EventShortModel[]>(`${endpoint}/${artistId}/tickets`)) as EventShortModel[];
    return events.map(EventService.transformEvent) as EventShortModel[];
  }
}
