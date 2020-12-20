import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { EventDto } from '../dtos/event.dto';
import { FilterEventDto } from '../dtos/filter-event.dto';
import { EventService } from '../services/event.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'events', type: [EventDto] })
  async getEvents(@Query() filter: FilterEventDto): Promise<EventDto[]> {
    const events = await this.eventService.findAll(filter);
    return events;
  }

  @Get('new')
  @ApiResponse({ status: 200, description: 'new events', type: [EventDto] })
  async getNewEvents(@Query() filter: FilterEventDto): Promise<EventDto[]> {
    const events = await this.eventService.findNewAll(filter);
    return events;
  }

  @Get('popular')
  @ApiResponse({ status: 200, description: 'popular events', type: [EventDto] })
  async getPopularEvents(@Query() filter: FilterEventDto): Promise<EventDto[]> {
    const events = await this.eventService.findPopularAll(filter);
    return events;
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'artist', type: EventDto })
  async getEvent(@Param('id', new ParseIntPipe()) id: number): Promise<EventDto> {
    const event = await this.eventService.findOne(id);
    return event;
  }
}
