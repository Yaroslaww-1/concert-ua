import { BaseService } from '@application/common/base-classes/base-service';
import { Injectable } from '@nestjs/common';
import { classToPlain, plainToClass } from 'class-transformer';
import { ArtistDto } from '../dtos/artist.dto';
import { ArtistRepository } from '../repositories/artist.repository';

@Injectable()
export class ArtistService extends BaseService<ArtistDto> {
  constructor(private readonly artistRepository: ArtistRepository) {
    super(artistRepository, entity => plainToClass(ArtistDto, classToPlain(entity)));
  }
}
