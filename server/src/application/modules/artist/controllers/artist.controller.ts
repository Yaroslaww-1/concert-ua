import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ArtistDto } from '../dtos/artist.dto';
import { CreateArtistDto } from '../dtos/create-artist.dto';
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

  @Post()
  async createArtist(@Body() artist: CreateArtistDto): Promise<ArtistDto> {
    const newArtist = await this.artistService.save(artist);
    return newArtist;
  }
}
