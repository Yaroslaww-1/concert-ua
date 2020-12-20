import { BaseService } from '@application/common/base-classes/base-service';
import { Injectable } from '@nestjs/common';
import { classToPlain, plainToClass } from 'class-transformer';
import { PlaceDto } from '../dtos/place.dto';
import { PlaceRepository } from '../repositories/place.repository';

@Injectable()
export class PlaceService extends BaseService<PlaceDto> {
  constructor(private readonly placeRepository: PlaceRepository) {
    super(placeRepository, entity => plainToClass(PlaceDto, classToPlain(entity)));
  }
}
