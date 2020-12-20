## Configuration and start up

- create .env file with properties described in .env.evample:
  - APP_PORT - application api port
  - APP_HOST - application api host (note: set 0.0.0.0 if using docker-compose)
  - DATABASE_TYPE, DATABASE_HOST, DATABASE_PORT, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_DATABASE - database properties
 - docker-compose up --build
   
#### Available options:
- application startup: `docker-compose up`
- unit tests: `docker-compose run backend npm run test:unit`
- see available swagger api: go to `http://{APP_HOST}:{APP_PORT}/api`