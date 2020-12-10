import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseConfig from '@config/database.config';
import { CityModule } from './city/city.module';
import { PlaceModule } from './place/place.module';
import { StyleModule } from './style/style.module';

@Module({
  imports: [TypeOrmModule.forRoot(DatabaseConfig), CityModule, PlaceModule, StyleModule],
})
export class RootModule {}
