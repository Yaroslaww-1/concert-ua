import { EventModel } from 'src/api/models/event.model';
import { createAsyncAction } from 'src/redux/helpers/actionCreator';

export const fetchNewEvents = createAsyncAction('HOME', 'NEW_EVENTS', {
  request: () => ({}),
  success: (events: EventModel[]) => ({ events }),
});
