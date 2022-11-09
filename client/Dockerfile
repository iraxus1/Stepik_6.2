FROM node:12.13.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY /client.js ./

EXPOSE 3000

CMD node client.js