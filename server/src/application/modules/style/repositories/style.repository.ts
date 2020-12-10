import { BaseRepository } from '@application/common/base-classes/base-repository';
import { IRepository } from '@application/common/types/repository.type';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStyleDto } from '../dtos/create-style.dto';
import { StyleEntity } from '../entities/style.entity';

@Injectable()
export class StyleRepository extends BaseRepository<StyleEntity, CreateStyleDto>
  implements IRepository<StyleEntity, CreateStyleDto> {
  constructor(
    @InjectRepository(StyleEntity)
    private readonly styleRepository: Repository<StyleEntity>,
  ) {
    super(styleRepository);
  }
}
