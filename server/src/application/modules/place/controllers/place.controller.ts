import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
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
}
