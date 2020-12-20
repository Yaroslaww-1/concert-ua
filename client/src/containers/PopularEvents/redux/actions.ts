import { EventModel } from 'src/api/models/event.model';
import { createAsyncAction } from 'src/redux/helpers/actionCreator';
import { createPaginationActions } from 'src/redux/helpers/paginationHelperCreator';

const type = 'POPULAR_EVENTS';

export const fetchPopularEvents = createAsyncAction('HOME', type, {
  request: () => ({}),
  success: (events: EventModel[]) => ({ events }),
});

export const paginationActions = createPaginationActions(type);
