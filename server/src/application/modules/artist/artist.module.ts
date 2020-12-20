import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistController } from './controllers/artist.controller';
import { ArtistImageEntity } from './entities/artist-image.entity';
import { ArtistEntity } from './entities/artist.entity';
import { ArtistImageRepository } from './repositories/artist-image.repository';
import { ArtistRepository } from './repositories/artist.repository';
import { ArtistService } from './services/artist.service';

const repositories = [ArtistImageRepository, ArtistRepository];
const services = [ArtistService];

@Module({
  imports: [TypeOrmModule.forFeature([ArtistImageEntity, ArtistEntity])],
  controllers: [ArtistController],
  providers: [...repositories, ...services],
})
export class ArtistModule {}
