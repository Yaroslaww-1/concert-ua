import { IEntity } from '@application/common/types/entity.type';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'events_styles' })
export class EventsStylesEntity implements IEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @PrimaryColumn()
  eventId: number;

  @Column()
  @IsNotEmpty()
  @PrimaryColumn()
  styleId: number;
}
