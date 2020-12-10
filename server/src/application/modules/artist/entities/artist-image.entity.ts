import { IEntity } from '@application/common/types/entity.type';
import { CityEntity } from '@application/modules/city/entities/city.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ArtistEntity } from './artist.entity';

@Entity({ name: 'ArtistImages' })
export class ArtistImageEntity implements IEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  url: string;

  @Column('bool')
  isMain: string;

  @OneToOne(
    () => ArtistEntity,
    artist => artist.galleryImages || artist.mainImage,
  )
  artist: CityEntity;
}
