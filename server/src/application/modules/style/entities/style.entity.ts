import { IEntity } from '@application/common/types/entity.type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'styles' })
export class StyleEntity implements IEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;
}
