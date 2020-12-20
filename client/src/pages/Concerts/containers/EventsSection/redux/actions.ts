import { createAsyncAction } from 'src/redux/helpers/actionCreator';
import { EventModel } from 'src/api/models/event.model';
import { createPaginationActions } from 'src/redux/helpers/paginationHelperCreator';

const type = 'CONCERTS/EVENTS';

export const fetchEvents = createAsyncAction(type, 'EVENTS', {
  request: () => ({}),
  success: (events: EventModel[]) => ({ events }),
});

export const paginationActions = createPaginationActions(type);
