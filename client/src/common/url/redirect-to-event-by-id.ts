import { Routes } from 'src/common/enum/routes';
import { History } from 'history';

export const redirectToEvent = <H = unknown>(history: History<H>, eventId: number) => {
  const eventPath = Routes.EVENT.split('/:id')[0];
  history.push(`${eventPath}/${eventId}`);
};
