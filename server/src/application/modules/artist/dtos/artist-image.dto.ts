import { ApiProperty } from '@nestjs/swagger';

export class ArtistImageDto {
  @ApiProperty({
    description: 'id of artist image',
    minimum: 0,
    type: Number,
  })
  readonly id: number;

  @ApiProperty({
    description: 'url of artist image',
    type: String,
  })
  readonly url: string;

  constructor({ id, url }: { id: number; url: string }) {
    this.id = id;
    this.url = url;
  }
}
