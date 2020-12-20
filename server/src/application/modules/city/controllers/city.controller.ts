import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CityDto } from '../dtos/city.dto';
import { CityService } from '../services/city.service';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'cities', type: [CityDto] })
  async getCities(): Promise<CityDto[]> {
    const cities = await this.cityService.findAll();
    return cities;
  }
}
