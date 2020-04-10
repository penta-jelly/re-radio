FROM node:10.17.0-alpine

WORKDIR /usr/src/app

ENV CYPRESS_INSTALL_BINARY 0
ENV CI 1

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY lerna.json ./lerna.json

COPY client/package.json ./client/package.json
COPY client/package-lock.json ./client/package-lock.json
COPY server/package.json ./server/package.json
COPY server/package-lock.json ./server/package-lock.json
COPY common/package.json ./common/package.json
COPY common/package-lock.json ./common/package-lock.json

# TODO: Remove the "--unsafe-perm" flag
RUN npm ci --unsafe-perm

COPY . .
RUN npm run initialize
RUN npm run compile
RUN npm run build

EXPOSE 2996

CMD [ "npx", "lerna", "run", "start", "--scope", "re-radio-server" ]
