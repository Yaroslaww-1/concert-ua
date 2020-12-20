import { IsNumber, IsString } from 'class-validator';

export class ArtistImageDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly url: string;

  constructor(props: ArtistImageDto) {
    Object.assign(this, props);
  }
}
