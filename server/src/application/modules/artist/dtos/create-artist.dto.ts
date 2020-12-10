import { ApiProperty } from '@nestjs/swagger';
import { CreateArtistImageDto } from './create-artist-image.dto';

export class CreateArtistDto {
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
  readonly mainImage: CreateArtistImageDto;

  @ApiProperty({
    description: 'other artist images (gallery)',
    type: String,
  })
  readonly galleryImages: CreateArtistImageDto[];

  constructor({
    name,
    descriptionHTML,
    mainImage,
    galleryImages,
  }: {
    name: string;
    descriptionHTML: string;
    mainImage: CreateArtistImageDto;
    galleryImages: CreateArtistImageDto[];
  }) {
    this.name = name;
    this.descriptionHTML = descriptionHTML;
    this.mainImage = mainImage;
    this.galleryImages = galleryImages;
  }
}
