import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

@Expose()
export class CityDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  constructor(props: CityDto) {
    Object.assign(this, props);
  }
}
