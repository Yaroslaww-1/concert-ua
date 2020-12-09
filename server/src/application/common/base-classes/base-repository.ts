import { IRepository } from '@application/common/types/repository.type';
import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

export class BaseRepository<Entity, CreatingDto, UpdatingDto = CreatingDto>
  implements IRepository<Entity, CreatingDto, UpdatingDto> {
  constructor(private readonly entityRepository: Repository<Entity>) {}

  async findAll<T = unknown>(filter?: T): Promise<Entity[]> {
    const items = await this.entityRepository.find(filter);
    return items;
  }

  async findOne(id: number): Promise<Entity> {
    const item = await this.entityRepository.findOne(id);
    return item;
  }

  async save(creatingDto: CreatingDto): Promise<Entity> {
    const newItem = await this.entityRepository.save(this.entityRepository.create(creatingDto));
    return newItem;
  }

  async update(id: number, updatingDto: UpdatingDto): Promise<Entity> {
    const isExisting = (await this.findOne(id)) !== null;
    if (!isExisting) {
      throw new NotFoundException(`${this.entityRepository.metadata.name} not found`);
    }
    const rows = await this.entityRepository.update(id, updatingDto);
    return rows[0];
  }

  async delete(id: number): Promise<void> {
    await this.entityRepository.delete(id);
  }
}
