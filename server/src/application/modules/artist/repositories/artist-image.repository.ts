import { BaseRepository } from '@application/common/base-classes/base-repository';
import { IRepository } from '@application/common/types/repository.type';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArtistImageDto } from '../dtos/create-artist-image.dto';
import { ArtistImageEntity } from '../entities/artist-image.entity';

@Injectable()
export class ArtistImageRepository extends BaseRepository<ArtistImageEntity, CreateArtistImageDto>
  implements IRepository<ArtistImageEntity, CreateArtistImageDto> {
  constructor(
    @InjectRepository(ArtistImageEntity)
    private readonly artistImageRepository: Repository<ArtistImageEntity>,
  ) {
    super(artistImageRepository);
  }
}
