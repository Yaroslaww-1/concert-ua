import { IEntity } from '@application/common/types/entity.type';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ArtistImageEntity } from './artist-image.entity';

@Entity({ name: 'artists' })
export class ArtistEntity implements IEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  name: string;

  @Column('text')
  descriptionHTML: string;

  @OneToOne(
    () => ArtistImageEntity,
    artistImage => artistImage.artist,
  )
  mainImage: ArtistImageEntity;

  @OneToMany(
    () => ArtistImageEntity,
    artistImage => artistImage.artist,
  )
  galleryImages: ArtistImageEntity[];
}
