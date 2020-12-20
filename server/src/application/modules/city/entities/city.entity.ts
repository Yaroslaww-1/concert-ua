import { IEntity } from '@application/common/types/entity.type';
import { PlaceEntity } from '@application/modules/place/entities/place.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cities' })
export class CityEntity implements IEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @OneToMany(
    () => PlaceEntity,
    place => place.city,
  )
  places: PlaceEntity[];
}
