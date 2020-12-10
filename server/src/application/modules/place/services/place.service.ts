import { BaseService } from '@application/common/base-classes/base-service';
import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from '../dtos/create-place.dto';
import { PlaceDto } from '../dtos/place.dto';
import { PlaceRepository } from '../repositories/place.repository';

@Injectable()
export class PlaceService extends BaseService<PlaceDto, CreatePlaceDto> {
  constructor(private readonly placeRepository: PlaceRepository) {
    super(placeRepository);
  }
}
