FROM node:12.2.0-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

RUN yarn global add @quasar/cli

COPY . .

CMD [ "yarn", "dev" ]