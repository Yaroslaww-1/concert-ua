import { EventModel } from 'src/api/models/event.model';
import { createAsyncAction } from 'src/redux/helpers/actionCreator';

export const fetchPopularEvents = createAsyncAction('HOME', 'POPULAR_EVENTS', {
  request: () => ({}),
  success: (events: EventModel[]) => ({ events }),
});
