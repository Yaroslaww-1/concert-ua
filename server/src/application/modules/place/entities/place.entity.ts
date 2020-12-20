import { IEntity } from '@application/common/types/entity.type';
import { CityEntity } from '@application/modules/city/entities/city.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'places' })
export class PlaceEntity implements IEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 200 })
  address: string;

  @ManyToOne(
    () => CityEntity,
    city => city.places,
  )
  city: CityEntity;
}
