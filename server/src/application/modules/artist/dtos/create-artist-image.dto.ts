import { ApiProperty } from '@nestjs/swagger';

export class CreateArtistImageDto {
  @ApiProperty({
    description: 'url of artist image',
    type: String,
  })
  readonly url: string;

  constructor({ url }: { url: string }) {
    this.url = url;
  }
}
