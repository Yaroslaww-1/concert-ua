import { BaseService } from '@application/common/base-classes/base-service';
import { Injectable } from '@nestjs/common';
import { CreateStyleDto } from '../dtos/create-style.dto';
import { StyleDto } from '../dtos/style.dto';
import { StyleRepository } from '../repositories/style.repository';

@Injectable()
export class StyleService extends BaseService<StyleDto, CreateStyleDto> {
  constructor(private readonly styleRepository: StyleRepository) {
    super(styleRepository);
  }
}
