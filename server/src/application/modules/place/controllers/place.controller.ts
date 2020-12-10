import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreatePlaceDto } from '../dtos/create-place.dto';
import { PlaceDto } from '../dtos/place.dto';
import { PlaceService } from '../services/place.service';

@Controller('places')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'places', type: [PlaceDto] })
  async getPlaces(): Promise<PlaceDto[]> {
    const places = await this.placeService.findAll();
    return places;
  }

  @Post()
  async createPlace(@Body() place: CreatePlaceDto): Promise<PlaceDto> {
    const newPlace = await this.placeService.save(place);
    return newPlace;
  }
}
