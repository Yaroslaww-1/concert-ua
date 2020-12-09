import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from './controllers/city.controller';
import { CityEntity } from './entities/city.entity';
import { CityRepository } from './repositories/city.repository';
import { CityService } from './services/city.service';

const repositories = [CityRepository];
const services = [CityService];

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity])],
  controllers: [CityController],
  providers: [...repositories, ...services],
})
export class CityModule {}
