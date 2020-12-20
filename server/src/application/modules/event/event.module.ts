import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventController } from './controllers/event.controller';
import { EventTagEntity } from './entities/event-tag.entity';
import { EventEntity } from './entities/event.entity';
import { EventsTagsEntity } from './entities/events-tags.entity';
import { EventRepository } from './repositories/event.repository';
import { EventService } from './services/event.service';

const repositories = [EventRepository];
const services = [EventService];

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity, EventTagEntity, EventsTagsEntity])],
  controllers: [EventController],
  providers: [...repositories, ...services],
})
export class EventModule {}
