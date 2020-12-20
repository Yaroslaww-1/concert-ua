import { IEntity } from '@application/common/types/entity.type';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'events_tags' })
export class EventsTagsEntity implements IEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @PrimaryColumn()
  eventId: number;

  @Column()
  @IsNotEmpty()
  @PrimaryColumn()
  tagId: number;
}
