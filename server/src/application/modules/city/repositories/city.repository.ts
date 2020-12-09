import { BaseRepository } from '@application/common/base-classes/base-repository';
import { IRepository } from '@application/common/types/repository.type';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityDto } from '../dtos/create-city.dto';
import { CityEntity } from '../entities/city.entity';

@Injectable()
export class CityRepository extends BaseRepository<CityEntity, CreateCityDto>
  implements IRepository<CityEntity, CreateCityDto> {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
  ) {
    super(cityRepository);
  }
}
