import { CityDto } from '@application/modules/city/dtos/city.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlaceDto {
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
    description: 'city, where place is located',
    type: String,
  })
  readonly city: CityDto;

  constructor({ name, address, city }: { name: string; address: string; city: CityDto }) {
    this.name = name;
    this.address = address;
    this.city = city;
  }
}
