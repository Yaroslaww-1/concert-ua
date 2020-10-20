import { EventModel } from 'src/api/models/event.model';
import { createAsyncAction } from 'src/redux/helpers/actionCreator';

export const fetchEvents = createAsyncAction('HOME', 'EVENTS', {
  request: () => ({}),
  success: (events: EventModel[]) => ({ events }),
});
