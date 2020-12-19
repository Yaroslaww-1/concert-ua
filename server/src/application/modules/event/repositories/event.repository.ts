import { BaseRepository } from '@application/common/base-classes/base-repository';
import { IRepository } from '@application/common/types/repository.type';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from '../entities/event.entity';

export interface IEventFilter {
  name?: string;
  offset?: number;
  limit?: number;
}

@Injectable()
export class EventRepository extends BaseRepository<EventEntity> implements IRepository<EventEntity> {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
  ) {
    super(eventRepository);
  }

  private getCommonQuery() {
    return this.eventRepository
      .createQueryBuilder('events')
      .leftJoinAndSelect('events.artist', 'artist')
      .leftJoinAndSelect('artist.mainImage', 'artist.mainImage')
      .leftJoinAndSelect('events.place', 'place')
      .leftJoinAndSelect('events.tags', 'tags')
      .groupBy('events.id, artist.id, place.id, artist.mainImage.id, tags.id');
  }

  async findAll(filter: IEventFilter = {}): Promise<EventEntity[]> {
    const { name = '', offset = 0, limit = 8 } = filter;
    const events = await this.getCommonQuery()
      .where('events.name ILIKE :name', { name: `%${name}` })
      .offset(offset)
      .take(limit)
      .getMany();
    return events;
  }

  async findOne(id: number): Promise<EventEntity> {
    const event = await this.getCommonQuery()
      .where('events.id = :id', { id })
      .getOne();
    return event;
  }
}
