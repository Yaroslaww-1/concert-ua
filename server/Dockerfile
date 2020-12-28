FROM node:12.16-alpine3.10

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

RUN npm run build

EXPOSE 5001

CMD ["npm", "run", "start:prod"]