import { BaseRepository } from '@application/common/base-classes/base-repository';
import { IRepository } from '@application/common/types/repository.type';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlaceEntity } from '../entities/place.entity';

@Injectable()
export class PlaceRepository extends BaseRepository<PlaceEntity> implements IRepository<PlaceEntity> {
  constructor(
    @InjectRepository(PlaceEntity)
    private readonly placeRepository: Repository<PlaceEntity>,
  ) {
    super(placeRepository);
  }

  async findAll(): Promise<PlaceEntity[]> {
    const places = await this.placeRepository.find({ relations: ['city'] });
    return places;
  }

  async findOne(): Promise<PlaceEntity> {
    const place = await this.placeRepository.findOne({ relations: ['city'] });
    return place;
  }
}
