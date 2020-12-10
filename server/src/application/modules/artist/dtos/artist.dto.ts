import { ApiProperty } from '@nestjs/swagger';
import { ArtistImageDto } from './artist-image.dto';

export class ArtistDto {
  @ApiProperty({
    description: 'id of artist',
    minimum: 0,
    type: Number,
  })
  readonly id: number;

  @ApiProperty({
    description: 'name of artist',
    type: String,
  })
  readonly name: string;

  @ApiProperty({
    description: 'description of artist in HTML form',
    type: String,
  })
  readonly descriptionHTML: string;

  @ApiProperty({
    description: 'main artist image (preview)',
    type: String,
  })
  readonly mainImage: ArtistImageDto;

  @ApiProperty({
    description: 'other artist images (gallery)',
    type: String,
  })
  readonly galleryImages: ArtistImageDto[];

  constructor({
    id,
    name,
    descriptionHTML,
    mainImage,
    galleryImages,
  }: {
    id: number;
    name: string;
    descriptionHTML: string;
    mainImage: ArtistImageDto;
    galleryImages: ArtistImageDto[];
  }) {
    this.id = id;
    this.name = name;
    this.descriptionHTML = descriptionHTML;
    this.mainImage = mainImage;
    this.galleryImages = galleryImages;
  }
}
