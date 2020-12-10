import { ApiProperty } from '@nestjs/swagger';

export class CreateStyleDto {
  @ApiProperty({
    description: 'name of style',
    type: String,
  })
  readonly name: string;

  constructor({ name }: { name: string }) {
    this.name = name;
  }
}
