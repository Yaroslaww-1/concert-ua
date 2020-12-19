import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { EventDto } from '../dtos/event.dto';
import { EventService } from '../services/event.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'events', type: [EventDto] })
  async getEvents(): Promise<EventDto[]> {
    const events = await this.eventService.findAll();
    return events;
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'artist', type: EventDto })
  async getEvent(@Param('id', new ParseIntPipe()) id: number): Promise<EventDto> {
    const event = await this.eventService.findOne(id);
    return event;
  }
}
