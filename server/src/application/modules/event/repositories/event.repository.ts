import { BaseRepository } from '@application/common/base-classes/base-repository';
import { IRepository } from '@application/common/types/repository.type';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from '../entities/event.entity';

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

  async findAll(): Promise<EventEntity[]> {
    const events = await this.getCommonQuery().getMany();
    return events;
  }

  async findOne(id: number): Promise<EventEntity> {
    const event = await this.getCommonQuery()
      .where('events.id = :id', { id })
      .getOne();
    return event;
  }
}
