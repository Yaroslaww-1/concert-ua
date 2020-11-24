import { Routes } from 'src/common/enum/routes';

export const redirectToEvent = <H = unknown>(history: { push: (url: string) => void }, eventId: string) => {
  const eventPath = Routes.EVENT.split('/:id')[0];
  history.push(`${eventPath}/${eventId}`);
};
