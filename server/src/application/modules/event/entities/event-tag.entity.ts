import { IEntity } from '@application/common/types/entity.type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'event_tags' })
export class EventTagEntity implements IEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;
}
