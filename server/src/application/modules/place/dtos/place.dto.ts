import { CityDto } from '@application/modules/city/dtos/city.dto';
import { ApiProperty } from '@nestjs/swagger';

export class PlaceDto {
  @ApiProperty({
    description: 'id of place',
    minimum: 0,
    type: Number,
  })
  readonly id: number;

  @ApiProperty({
    description: 'name of place',
    type: String,
  })
  readonly name: string;

  @ApiProperty({
    description: 'address of place',
    type: String,
  })
  readonly address: string;

  @ApiProperty({
    description: 'city where place is located',
    type: String,
  })
  readonly city: CityDto;

  constructor({ id, name, address, city }: { id: number; name: string; address: string; city: CityDto }) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.city = city;
  }
}
