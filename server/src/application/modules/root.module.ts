import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseConfig from '@config/database.config';
import { CityModule } from './city/city.module';
import { PlaceModule } from './place/place.module';

@Module({
  imports: [TypeOrmModule.forRoot(DatabaseConfig), CityModule, PlaceModule],
})
export class RootModule {}
