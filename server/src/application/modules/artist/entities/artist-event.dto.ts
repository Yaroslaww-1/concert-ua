import { PlaceDto } from '@application/modules/place/dtos/place.dto';
import { Exclude, Expose } from 'class-transformer';
import { IsBoolean, IsNumber, IsString, ValidateNested } from 'class-validator';

@Exclude()
export class ArtistEventDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  readonly name: string;

  @Expose()
  @ValidateNested()
  readonly place: PlaceDto;

  @Expose()
  @IsString()
  readonly date: string;

  @Expose()
  @IsNumber()
  readonly price: number;

  @Expose()
  @IsString()
  readonly promoter: string;

  @Expose()
  @IsBoolean()
  readonly hot: boolean;

  constructor(props: ArtistEventDto) {
    Object.assign(this, props);
  }
}
