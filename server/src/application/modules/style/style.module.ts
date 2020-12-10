import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StyleController } from './controllers/style.controller';
import { StyleEntity } from './entities/style.entity';
import { StyleRepository } from './repositories/style.repository';
import { StyleService } from './services/style.service';

const repositories = [StyleRepository];
const services = [StyleService];

@Module({
  imports: [TypeOrmModule.forFeature([StyleEntity])],
  controllers: [StyleController],
  providers: [...repositories, ...services],
})
export class StyleModule {}
