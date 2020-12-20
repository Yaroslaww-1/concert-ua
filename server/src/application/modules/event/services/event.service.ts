import { BaseService } from '@application/common/base-classes/base-service';
import { Injectable } from '@nestjs/common';
import { classToPlain, plainToClass } from 'class-transformer';
import { EventDto } from '../dtos/event.dto';
import { EventRepository } from '../repositories/event.repository';

@Injectable()
export class EventService extends BaseService<EventDto> {
  constructor(private readonly eventRepository: EventRepository) {
    super(eventRepository, entity => plainToClass(EventDto, classToPlain(entity)));
  }
}
