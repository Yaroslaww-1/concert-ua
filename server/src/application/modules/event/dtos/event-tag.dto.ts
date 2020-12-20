export class EventTagDto {
  readonly id: number;
  readonly name: string;

  constructor({ id, name }: { id: number; name: string }) {
    this.id = id;
    this.name = name;
  }
}
