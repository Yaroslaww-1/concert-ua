import { ArtistDto } from '@application/modules/artist/dtos/artist.dto';
import { PlaceDto } from '@application/modules/place/dtos/place.dto';
import { EventTagDto } from './event-tag.dto';

export class EventDto {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly descriptionHTML: string;
  readonly place: PlaceDto;
  readonly date: string;
  readonly imageUrl: string;
  readonly price: string;
  readonly tags: EventTagDto[];
  readonly promoter: string;
  readonly hot: boolean;
  readonly artist: ArtistDto;

  constructor(props: EventDto) {
    Object.assign(this, props);
  }
}
