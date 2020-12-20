import { BaseService } from '@application/common/base-classes/base-service';
import { Injectable } from '@nestjs/common';
import { classToPlain, plainToClass } from 'class-transformer';
import { CityDto } from '../dtos/city.dto';
import { CityRepository } from '../repositories/city.repository';

@Injectable()
export class CityService extends BaseService<CityDto> {
  constructor(private readonly cityRepository: CityRepository) {
    super(cityRepository, entity => plainToClass(CityDto, classToPlain(entity)));
  }
}
