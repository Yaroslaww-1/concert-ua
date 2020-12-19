import { createAsyncAction } from 'src/redux/helpers/actionCreator';
import { EventModel } from 'src/api/models/event.model';
import { IEventFilter } from 'src/api/services/event.service';

const type = 'CONCERTS/EVENTS';

export const fetchEvents = createAsyncAction(type, 'EVENTS', {
  request: (filter: IEventFilter) => ({ filter }),
  success: (events: EventModel[]) => ({ events }),
});
