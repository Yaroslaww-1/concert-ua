import { fromStringToNumberArray } from '@application/common/transformers/string-to-number-array.transform';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class FilterArtistDto {
  @Transform(fromStringToNumberArray)
  @IsNumber({}, { each: true })
  @IsOptional()
  readonly stylesIds?: number[];

  @IsString()
  @IsOptional()
  readonly name?: string;
}
