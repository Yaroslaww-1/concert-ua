import { createAsyncAction } from 'src/redux/helpers/actionCreator';
import { EventModel } from 'src/api/models/event.model';

const type = 'CONCERTS/EVENTS';

export const fetchEvents = createAsyncAction(type, 'EVENTS', {
  request: () => ({}),
  success: (events: EventModel[]) => ({ events }),
});
