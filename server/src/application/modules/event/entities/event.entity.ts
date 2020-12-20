import { IEntity } from '@application/common/types/entity.type';
import { ArtistEntity } from '@application/modules/artist/entities/artist.entity';
import { PlaceEntity } from '@application/modules/place/entities/place.entity';
import { StyleEntity } from '@application/modules/style/entities/style.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EventTagEntity } from './event-tag.entity';

@Entity({ name: 'events' })
export class EventEntity implements IEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column('text')
  description: string;

  @Column('text')
  descriptionHTML: string;

  @ManyToOne(() => PlaceEntity)
  @JoinColumn()
  place: PlaceEntity;

  @Column('timestamp')
  date: string;

  @Column('text')
  imageUrl: string;

  @Column('real')
  price: number;

  @Column({ length: 100 })
  promoter: string;

  @Column('bool')
  hot: boolean;

  @ManyToMany(() => EventTagEntity)
  @JoinTable({
    name: 'events_tags',
    joinColumn: { name: 'eventId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tagId', referencedColumnName: 'id' },
  })
  tags: EventTagEntity[];

  @ManyToOne(() => ArtistEntity)
  @JoinColumn({ name: 'artistId' })
  artist: ArtistEntity;

  @ManyToMany(() => StyleEntity)
  @JoinTable({
    name: 'events_styles',
    joinColumn: { name: 'eventId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'styleId', referencedColumnName: 'id' },
  })
  styles: StyleEntity[];
}
