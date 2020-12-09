import { IEntity } from '@application/common/types/entity.type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cities' })
export class CityEntity implements IEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;
}
