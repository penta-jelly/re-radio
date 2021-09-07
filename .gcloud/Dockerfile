FROM node:16-alpine AS builder

WORKDIR /usr/app

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
RUN npx lerna run initialize:env
RUN npm run compile
RUN npm run build

RUN cd server && node lib/pkg.js

FROM alpine:latest

RUN apk update && \
  apk add --no-cache libstdc++ libgcc ca-certificates git && \
  rm -rf /var/cache/apk/*

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

WORKDIR /usr/app
COPY --from=builder /usr/app/server/dist .

ENV RADIO_SERVER_PORT 2996

EXPOSE 2996

CMD /wait && ./app serve radio & ./app serve real-time-radio
