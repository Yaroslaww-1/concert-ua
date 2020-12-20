import { CityDto } from '@application/modules/city/dtos/city.dto';
import { Expose } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';

@Expose()
export class PlaceDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly address: string;

  @ValidateNested()
  readonly city: CityDto;

  constructor(props: PlaceDto) {
    Object.assign(this, props);
  }
}
