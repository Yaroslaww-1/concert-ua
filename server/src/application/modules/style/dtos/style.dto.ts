import { ApiProperty } from '@nestjs/swagger';

export class StyleDto {
  @ApiProperty({
    description: 'id of style',
    minimum: 0,
    type: Number,
  })
  readonly id: number;

  @ApiProperty({
    description: 'name of style',
    type: String,
  })
  readonly name: string;

  constructor({ id, name }: { id: number; name: string }) {
    this.id = id;
    this.name = name;
  }
}
