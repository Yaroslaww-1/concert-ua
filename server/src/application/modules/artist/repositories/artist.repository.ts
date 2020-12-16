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

  async save(artist: CreateArtistDto): Promise<ArtistEntity> {
    const mainImage = await this.artistImageRepository.save(artist.mainImage);
    const galleryImages = await Promise.all(artist.galleryImages.map(image => this.artistImageRepository.save(image)));
    const newArtist = await this.artistRepository.save(
      this.artistRepository.create({ ...artist, mainImage, galleryImages }),
    );
    return newArtist;
  }
}
