import { BaseRepository } from '@application/common/base-classes/base-repository';
import { IRepository } from '@application/common/types/repository.type';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { EventFilterOrderBy, FilterEventDto } from '../dtos/filter-event.dto';
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

  private getQueryWithOrderBy(
    query: SelectQueryBuilder<EventEntity>,
    orderBy: EventFilterOrderBy,
  ): SelectQueryBuilder<EventEntity> {
    if (orderBy.date) {
      query = query.addOrderBy('events.date', orderBy.date);
    }
    if (orderBy.popularity) {
      query = query.addOrderBy('events.hot', orderBy.popularity);
    }
    query = query.addOrderBy('events.id', 'ASC');
    return query;
  }

  async findAll(filter: FilterEventDto = {}): Promise<EventEntity[]> {
    const { stylesIds, placesIds, date, offset = 0, limit = 8, orderBy = {} } = filter;
    let query = this.getCommonQuery();
    if (stylesIds && stylesIds.length > 0) {
      query.leftJoin('events.styles', 'styles').andWhere('styles.id IN (:...stylesIds)', { stylesIds });
    }
    if (placesIds && placesIds.length > 0) {
      query.andWhere('place.id IN (:...placesIds)', { placesIds });
    }
    if (date) {
      query.andWhere('events.date BETWEEN (:from) AND (:to)', { from: date.from, to: date.to });
    }
    query = this.getQueryWithOrderBy(query, orderBy);
    const events = await query
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
