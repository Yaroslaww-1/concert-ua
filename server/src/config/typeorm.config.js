const databaseConfig = require('./database.config').default;

const commonConfig = {
  ...databaseConfig,
  migrationsRun: true,
  synchronize: false,
  logging: true,
  logger: 'simple-console',
};

module.exports = [
  {
    ...commonConfig,
    migrations: ['src/database/migrations/*{.ts,.js}'],
  },
  {
    ...commonConfig,
    name: 'seed',
    migrations: ['src/database/seeds/*.ts'],
  },
];
