import { ArtistImageModel, defaultArtistImage } from './artist-image.model';

export type ArtistShortModel = {
  id: string;
  name: string;
  mainImage: ArtistImageModel;
};

export const defaultArtistShort: ArtistShortModel = {
  id: '',
  name: '',
  mainImage: defaultArtistImage,
};
