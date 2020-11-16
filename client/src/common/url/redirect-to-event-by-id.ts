import { Routes } from 'src/common/enum/routes';

export const redirectToEvent = (eventId: string) => {
  const eventPath = Routes.EVENT.split('/:id')[0];
  window.location.href = `#${eventPath}/${eventId}`;
  window.location.reload();
};
