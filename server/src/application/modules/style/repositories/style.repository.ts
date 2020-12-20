import { BaseRepository } from '@application/common/base-classes/base-repository';
import { IRepository } from '@application/common/types/repository.type';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StyleEntity } from '../entities/style.entity';

@Injectable()
export class StyleRepository extends BaseRepository<StyleEntity> implements IRepository<StyleEntity> {
  constructor(
    @InjectRepository(StyleEntity)
    private readonly styleRepository: Repository<StyleEntity>,
  ) {
    super(styleRepository);
  }
}
