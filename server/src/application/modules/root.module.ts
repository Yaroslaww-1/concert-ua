import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseConfig from '@config/database.config';
import { CityModule } from './city/city.module';
import { PlaceModule } from './place/place.module';
import { StyleModule } from './style/style.module';
import { ArtistModule } from './artist/artist.module';

@Module({
  imports: [TypeOrmModule.forRoot(DatabaseConfig), CityModule, PlaceModule, StyleModule, ArtistModule],
})
export class RootModule {}
