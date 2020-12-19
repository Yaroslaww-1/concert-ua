import { ArtistImageModel, defaultArtistImage } from './artist-image.model';

export type ArtistShortModel = {
  id: number;
  name: string;
  mainImage: ArtistImageModel;
};

export const defaultArtistShort: ArtistShortModel = {
  id: 0,
  name: '',
  mainImage: defaultArtistImage,
};
