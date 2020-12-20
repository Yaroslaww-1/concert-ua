import { fromStringToNumberArray } from '@application/common/transformers/string-to-number-array.transform';
import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, ValidateNested } from 'class-validator';

class DateFilterEventDto {
  @Transform(value => new Date(value))
  @IsDate()
  readonly from: Date;

  @Transform(value => new Date(value))
  @IsDate()
  readonly to: Date;

  constructor(props: DateFilterEventDto) {
    Object.assign(this, props);
  }
}

export enum OrderBy {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class EventFilterOrderBy {
  @IsNumber()
  @IsOptional()
  readonly date?: OrderBy;

  @IsNumber()
  @IsOptional()
  readonly popularity?: OrderBy;

  constructor(props: EventFilterOrderBy) {
    Object.assign(this, props);
  }
}

export class FilterEventDto {
  @Transform(fromStringToNumberArray)
  @IsNumber({}, { each: true })
  @IsOptional()
  readonly stylesIds?: number[];

  @Transform(fromStringToNumberArray)
  @IsNumber({}, { each: true })
  @IsOptional()
  readonly placesIds?: number[];

  @ValidateNested()
  @IsOptional()
  readonly date?: DateFilterEventDto;

  @IsNumber()
  @IsOptional()
  readonly offset?: number;

  @IsNumber()
  @IsOptional()
  readonly limit?: number;

  @ValidateNested()
  @IsOptional()
  readonly orderBy?: EventFilterOrderBy;

  constructor(props: FilterEventDto) {
    Object.assign(this, props);
  }
}
