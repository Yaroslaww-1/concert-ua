import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

@Expose()
export class StyleDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  constructor(props: StyleDto) {
    Object.assign(this, props);
  }
}
