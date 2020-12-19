import { IEntity } from '@application/common/types/entity.type';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EventEntity } from './event.entity';

@Entity({ name: 'event_tags' })
export class EventTagEntity implements IEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @ManyToMany(
    () => EventEntity,
    event => event.tags,
  )
  event: EventTagEntity[];
}
