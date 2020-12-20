import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ArtistDto } from '../dtos/artist.dto';
import { ArtistService } from '../services/artist.service';

@Controller('artists')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'artists', type: [ArtistDto] })
  async getArtists(): Promise<ArtistDto[]> {
    const artists = await this.artistService.findAll();
    return artists;
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'artist', type: ArtistDto })
  async getArtist(@Param('id', new ParseIntPipe()) id: number): Promise<ArtistDto> {
    const artist = await this.artistService.findOne(id);
    return artist;
  }
}
