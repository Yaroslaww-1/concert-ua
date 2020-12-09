import { BaseService } from '@application/common/base-classes/base-service';
import { Injectable } from '@nestjs/common';
import { CityDto } from '../dtos/city.dto';
import { CreateCityDto } from '../dtos/create-city.dto';
import { CityRepository } from '../repositories/city.repository';

@Injectable()
export class CityService extends BaseService<CityDto, CreateCityDto> {
  constructor(private readonly cityRepository: CityRepository) {
    super(cityRepository);
  }
}
