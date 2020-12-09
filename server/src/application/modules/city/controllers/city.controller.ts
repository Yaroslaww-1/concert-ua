import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CityDto } from '../dtos/city.dto';
import { CreateCityDto } from '../dtos/create-city.dto';
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

  @Post()
  async createCity(@Body() city: CreateCityDto): Promise<CityDto> {
    const newCity = await this.cityService.save(city);
    return newCity;
  }
}
