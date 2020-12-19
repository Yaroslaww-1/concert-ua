import { ArtistShortModel, defaultArtistShort } from './artist-short.model';
import { EventTagModel } from './event-tag.model';
import { defaultPlace, PlaceModel } from './place.model';

export type EventModel = {
  id: number;
  name: string;
  description: string;
  descriptionHTML: string;
  place: PlaceModel;
  date: Date;
  imageUrl: string;
  price: string;
  tags: EventTagModel[];
  promoter: string;
  hot: boolean;
  artist: ArtistShortModel;
};

export const defaultEvent: EventModel = {
  id: 0,
  name: '',
  description: '',
  descriptionHTML: '',
  place: defaultPlace,
  date: new Date(),
  imageUrl: '',
  price: '',
  tags: [],
  promoter: '',
  hot: false,
  artist: defaultArtistShort,
};
