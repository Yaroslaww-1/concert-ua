import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceController } from './controllers/place.controller';
import { PlaceEntity } from './entities/place.entity';
import { PlaceRepository } from './repositories/place.repository';
import { PlaceService } from './services/place.service';

const repositories = [PlaceRepository];
const services = [PlaceService];

@Module({
  imports: [TypeOrmModule.forFeature([PlaceEntity])],
  controllers: [PlaceController],
  providers: [...repositories, ...services],
})
export class PlaceModule {}
