import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseConfig from '@config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: DatabaseConfig.type,
      host: DatabaseConfig.host,
      port: DatabaseConfig.port,
      username: DatabaseConfig.username,
      password: DatabaseConfig.password,
      database: DatabaseConfig.database,
      synchronize: DatabaseConfig.synchronize,
      entities: [],
      migrations: [__dirname + '../../database/migrations'],
      migrationsRun: true,
    }),
  ],
})
export class RootModule {}
