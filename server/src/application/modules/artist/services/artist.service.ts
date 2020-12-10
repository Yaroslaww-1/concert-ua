import { BaseService } from '@application/common/base-classes/base-service';
import { Injectable } from '@nestjs/common';
import { ArtistDto } from '../dtos/artist.dto';
import { CreateArtistDto } from '../dtos/create-artist.dto';
import { ArtistRepository } from '../repositories/artist.repository';

@Injectable()
export class ArtistService extends BaseService<ArtistDto, CreateArtistDto> {
  constructor(private readonly artistRepository: ArtistRepository) {
    super(artistRepository);
  }
}
