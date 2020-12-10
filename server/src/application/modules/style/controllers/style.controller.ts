import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreateStyleDto } from '../dtos/create-style.dto';
import { StyleDto } from '../dtos/style.dto';
import { StyleService } from '../services/style.service';

@Controller('styles')
export class StyleController {
  constructor(private readonly styleService: StyleService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'styles', type: [StyleDto] })
  async getStyles(): Promise<StyleDto[]> {
    const styles = await this.styleService.findAll();
    return styles;
  }

  @Post()
  async createStyle(@Body() style: CreateStyleDto): Promise<StyleDto> {
    const newStyle = await this.styleService.save(style);
    return newStyle;
  }
}
