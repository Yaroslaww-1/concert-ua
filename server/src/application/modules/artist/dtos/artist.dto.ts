import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { ArtistImageDto } from './artist-image.dto';

export class ArtistDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly descriptionHTML: string;

  @ValidateNested()
  @Type(() => ArtistImageDto)
  readonly mainImage: ArtistImageDto;

  @ValidateNested()
  @Type(() => ArtistImageDto)
  readonly galleryImages: ArtistImageDto[];

  constructor(props: ArtistDto) {
    Object.assign(this, props);
  }
}
