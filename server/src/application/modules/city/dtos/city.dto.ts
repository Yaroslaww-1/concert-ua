import { ApiProperty } from '@nestjs/swagger';

export class CityDto {
  @ApiProperty({
    description: 'id of city',
    minimum: 0,
    type: Number,
  })
  readonly id: number;

  @ApiProperty({
    description: 'name of city',
    type: String,
  })
  readonly name: string;

  constructor({ id, name }: { id: number; name: string }) {
    this.id = id;
    this.name = name;
  }
}
