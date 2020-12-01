import { Routes } from 'src/common/enum/routes';
import { History } from 'history';

export const redirectToArtist = <H = unknown>(history: History<H>, artistId: string) => {
  const artistPath = Routes.ARTIST.split('/:id')[0];
  history.push(`${artistPath}/${artistId}`);
};
