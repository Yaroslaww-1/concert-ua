import { IEntity } from '@application/common/types/entity.type';
import { StyleEntity } from '@application/modules/style/entities/style.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @ManyToMany(() => StyleEntity)
  @JoinTable({
    name: 'artists_styles',
    joinColumn: { name: 'artistId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'styleId', referencedColumnName: 'id' },
  })
  styles: StyleEntity[];
}
