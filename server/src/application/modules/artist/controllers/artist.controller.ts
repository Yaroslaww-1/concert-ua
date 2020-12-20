import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ArtistDto } from '../dtos/artist.dto';
import { FilterArtistDto } from '../dtos/filter-artist.dto';
import { ArtistEventDto } from '../entities/artist-event.dto';
import { ArtistService } from '../services/artist.service';

@Controller('artists')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'artists', type: [ArtistDto] })
  async getArtists(@Query() filter: FilterArtistDto): Promise<ArtistDto[]> {
    const artists = await this.artistService.findAll(filter);
    return artists;
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'artist', type: ArtistDto })
  async getArtist(@Param('id', new ParseIntPipe()) id: number): Promise<ArtistDto> {
    const artist = await this.artistService.findOne(id);
    return artist;
  }

  @Get(':id/tickets')
  @ApiResponse({ status: 200, description: 'artist', type: [ArtistEventDto] })
  async getArtistTickets(@Param('id', new ParseIntPipe()) id: number): Promise<ArtistEventDto[]> {
    const tickets = await this.artistService.getArtistTickets(id);
    return tickets;
  }
}
