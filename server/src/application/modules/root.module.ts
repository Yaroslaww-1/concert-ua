import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseConfig from '@config/database.config';
import { CityModule } from './city/city.module';

@Module({
  imports: [TypeOrmModule.forRoot(DatabaseConfig), CityModule],
})
export class RootModule {}
