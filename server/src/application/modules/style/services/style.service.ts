import { BaseService } from '@application/common/base-classes/base-service';
import { Injectable } from '@nestjs/common';
import { classToPlain, plainToClass } from 'class-transformer';
import { StyleDto } from '../dtos/style.dto';
import { StyleRepository } from '../repositories/style.repository';

@Injectable()
export class StyleService extends BaseService<StyleDto> {
  constructor(private readonly styleRepository: StyleRepository) {
    super(styleRepository, entity => plainToClass(StyleDto, classToPlain(entity)));
  }
}
