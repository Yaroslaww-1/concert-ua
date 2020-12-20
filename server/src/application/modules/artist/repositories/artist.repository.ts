import { BaseRepository } from '@application/common/base-classes/base-repository';
import { IRepository } from '@application/common/types/repository.type';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArtistEntity } from '../entities/artist.entity';
import { ArtistImageRepository } from './artist-image.repository';

@Injectable()
export class ArtistRepository extends BaseRepository<ArtistEntity> implements IRepository<ArtistEntity> {
  constructor(
    @InjectRepository(ArtistEntity)
    private readonly artistRepository: Repository<ArtistEntity>,
    private readonly artistImageRepository: ArtistImageRepository,
  ) {
    super(artistRepository);
  }

  // TODO: switch to filtering by ORM
  private filterArtist(artist: ArtistEntity): ArtistEntity {
    return {
      ...artist,
      galleryImages: artist.galleryImages.filter(image => image.isMain === false),
    };
  }

  private getCommonQuery() {
    return this.artistRepository
      .createQueryBuilder('artists')
      .leftJoinAndSelect('artists.mainImage', 'mainImage')
      .leftJoinAndSelect('artists.galleryImages', 'galleryImages')
      .groupBy('artists.id, artists.name, mainImage.id, galleryImages.id');
  }

  async findAll(): Promise<ArtistEntity[]> {
    const artists = await this.getCommonQuery().getMany();
    return artists.map(artist => this.filterArtist(artist));
  }

  async findOne(id: number): Promise<ArtistEntity> {
    const artist = await this.getCommonQuery()
      .where('artists.id = :id', { id })
      .getOne();
    return this.filterArtist(artist);
  }
}
