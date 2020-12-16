import { IEntity } from '@application/common/types/entity.type';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ArtistEntity } from './artist.entity';

@Entity({ name: 'ArtistsImages' })
export class ArtistImageEntity implements IEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  url: string;

  @Column('bool')
  isMain: boolean;

  @OneToOne(
    () => ArtistEntity,
    artist => [...artist.galleryImages, artist.mainImage],
  )
  @JoinColumn({ name: 'artistId' })
  artist: ArtistEntity;
}
