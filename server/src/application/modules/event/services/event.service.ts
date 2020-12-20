import { BaseService } from '@application/common/base-classes/base-service';
import { Injectable } from '@nestjs/common';
import { classToPlain, plainToClass } from 'class-transformer';
import { EventDto } from '../dtos/event.dto';
import { EventFilterOrderBy, FilterEventDto, OrderBy } from '../dtos/filter-event.dto';
import { EventRepository } from '../repositories/event.repository';

@Injectable()
export class EventService extends BaseService<EventDto> {
  constructor(private readonly eventRepository: EventRepository) {
    super(eventRepository, entity => plainToClass(EventDto, classToPlain(entity)));
  }

  async findNewAll(filter?: FilterEventDto): Promise<EventDto[]> {
    const filterWithOrderBy = new FilterEventDto({
      ...filter,
      orderBy: new EventFilterOrderBy({ date: OrderBy.DESC }),
    });
    const items = await super.findAll(filterWithOrderBy);
    return items;
  }

  async findPopularAll(filter?: FilterEventDto): Promise<EventDto[]> {
    const filterWithOrderBy = new FilterEventDto({
      ...filter,
      orderBy: new EventFilterOrderBy({ popularity: OrderBy.DESC }),
    });
    const items = await super.findAll(filterWithOrderBy);
    return items;
  }
}
