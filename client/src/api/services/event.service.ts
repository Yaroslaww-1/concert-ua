import api from '../api.helper';
import { EventModel } from '../models/event.model';

const endpoint = 'events';

export enum PopularRecentFilter {
  popular = 'popular',
  recent = 'new',
}

export interface IEventFilter {
  date?: {
    from: Date;
    to: Date;
  };
  placesIds?: number[];
  stylesIds?: number[];
  offset?: number;
  limit?: number;
  type?: PopularRecentFilter;
}

export class EventService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static transformEvent(event: Record<string, any>): EventModel {
    return {
      ...event,
      date: new Date(event.date),
    } as EventModel;
  }

  static async getEvents(filter: IEventFilter = { offset: 0, limit: 8 }): Promise<EventModel[]> {
    const events = (await api.get<EventModel[]>(endpoint, filter)) as EventModel[];
    return events.map(EventService.transformEvent);
  }

  static async getNewEvents(filter: IEventFilter = { offset: 0, limit: 8 }): Promise<EventModel[]> {
    const events = (await api.get<EventModel[]>(`${endpoint}/new`, filter)) as EventModel[];
    return events.map(EventService.transformEvent);
  }

  static async getPopularEvents(filter: IEventFilter = { offset: 0, limit: 8 }): Promise<EventModel[]> {
    const events = (await api.get<EventModel[]>(`${endpoint}/popular`, filter)) as EventModel[];
    return events.map(EventService.transformEvent);
  }

  static async getEventById(id: string): Promise<EventModel> {
    const event = (await api.get<EventModel>(`${endpoint}/${id}`)) as EventModel;
    return EventService.transformEvent(event);
  }
}
