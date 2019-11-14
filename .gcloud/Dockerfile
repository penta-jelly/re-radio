FROM node:10.17.0-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY lerna.json ./

COPY client/package.json ./client/package.json
COPY server/package.json ./server/package.json
COPY common/package.json ./common/package.json

RUN yarn install

COPY . ./
RUN yarn initialize && yarn compile && yarn build

EXPOSE 2996

CMD [ "yarn", "lerna", "run", "start", "--scope", "re-radio-server" ]
