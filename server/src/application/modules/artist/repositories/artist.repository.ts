import { BaseRepository } from '@application/common/base-classes/base-repository';
import { IRepository } from '@application/common/types/repository.type';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArtistDto } from '../dtos/create-artist.dto';
import { ArtistEntity } from '../entities/artist.entity';
import { ArtistImageRepository } from './artist-image.repository';

@Injectable()
export class ArtistRepository extends BaseRepository<ArtistEntity, CreateArtistDto>
  implements IRepository<ArtistEntity, CreateArtistDto> {
  constructor(
    @InjectRepository(ArtistEntity)
    private readonly artistRepository: Repository<ArtistEntity>,
    private readonly artistImageRepository: ArtistImageRepository,
  ) {
    super(artistRepository);
  }

  async findAll(): Promise<ArtistEntity[]> {
    const artists = await this.artistRepository.find({ relations: ['mainImage', 'galleryImages'] });
    return artists;
  }

  async findOne(): Promise<ArtistEntity> {
    const artist = await this.artistRepository.findOne({ relations: ['mainImage', 'galleryImages'] });
    return artist;
  }

  async save(artist: CreateArtistDto): Promise<ArtistEntity> {
    const mainImage = await this.artistImageRepository.save(artist.mainImage);
    const galleryImages = await Promise.all(artist.galleryImages.map(image => this.artistImageRepository.save(image)));
    const newArtist = await this.artistRepository.save(
      this.artistRepository.create({ ...artist, mainImage, galleryImages }),
    );
    return newArtist;
  }
}
