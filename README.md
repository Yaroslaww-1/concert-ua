# music-ua
Music.ua is a platform for seaching and buying tickets for your favourite music bands. It allows you to search and filter concerts, music bands.

## Technologies
Here you can see technologies that have been used in project.

#### Common
1. Typescript
2. ES2020

#### Client
1. Reactjs
2. React Redux
3. React Redux Saga
4. Material ui
5. Sass

#### Server
1. Nestjs
2. Typeorm

#### Database
1. PostgreSQL

## Installation
Here you can see installation algorithm for the project.

#### Client
1. Create .env as .env.example with correct data
2. ```npm install```
3. ```npm run start```

#### Backend
1. Create empty database
2. Create .env as .env.example with correct data
3. ```npm install```
4. ```npm run migration:run```
5. ```npm run seed:run```
6. ```npm run start:dev```

#### Docker
1. ```docker-compose up --build```
2. stop container
3. ```docker-compose run backend npm run migration:run```
4. ```docker-compose run backend npm run seed:run```
5. ```docker-compose up```

## Deployment
1. http://159.89.16.206/
2. Deployed version is located on feature/deployment
