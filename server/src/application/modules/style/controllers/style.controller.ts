import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
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
}
