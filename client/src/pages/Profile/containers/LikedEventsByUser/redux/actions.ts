import { EventModel } from 'src/api/models/event.model';
import { createAsyncAction } from 'src/redux/helpers/actionCreator';

const type = 'PROFILE/LIKED_EVENTS';

export const fetchUserLikedEvents = createAsyncAction(type, 'LIKED_EVENTS', {
  request: (userId: string) => ({ userId }),
  success: (events: EventModel[]) => ({ events }),
});
