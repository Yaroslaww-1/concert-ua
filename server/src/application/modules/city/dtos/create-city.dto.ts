import { ApiProperty } from '@nestjs/swagger';

export class CreateCityDto {
  @ApiProperty({
    description: 'name of city',
    type: String,
  })
  readonly name: string;

  constructor({ name }: { name: string }) {
    this.name = name;
  }
}
