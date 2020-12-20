const databaseConfig = require('./database.config').default;

module.exports = {
  ...databaseConfig,
  migrationsRun: true,
  synchronize: false,
  logging: true,
  logger: 'simple-console',
  migrations: ['src/database/migrations/*{.ts,.js}'],
  seeds: ['src/database/seeds/*{.ts,.js}'],
  entities: ['src/application/modules/**/entities/*.entity.ts'], //for migrations and seeds
};
