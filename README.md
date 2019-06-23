# re-radio

[![Build Status](https://travis-ci.org/penta-jelly/re-radio.svg?branch=master)](https://travis-ci.org/penta-jelly/re-radio)
[![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/#/projects/nn2y5c/runs)
[![Renovate](https://badges.renovateapi.com/github/penta-jelly/re-radio)](https://renovatebot.com/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fpenta-jelly%2Fre-radio.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fpenta-jelly%2Fre-radio?ref=badge_shield)

## Introduction

```txt
TODO: This section need to be updated
```

## How to start the application

### System requirement

* Docker: 18.x (Optional)
* Docker Compose: 1.24 (Optional)
* NodeJS: 10.x
* Npm: 6.x

### Build & start

```sh
npm install
```

```sh
npm start
```

## All services

Assume there is no customized configuration and we are talking about *localhost*.

* Prisma:
  * GraphQL Playground: [http://localhost:4466](http://localhost:4466)
  * Admin: [http://localhost:4466/_admin](http://localhost:4466/_admin)
* Server: [http://localhost:8000/graphql](http://localhost:8000/graphql)
* Client: [http://localhost:3000](http://localhost:3000)

## Development guideline

### Development system requirement

* Docker: 18.x (Optional)
* Docker Compose: 1.24 (Optional)
* NodeJS: 10.x
* Npm: 6.x

### Install dependencies

```sh
npm install
```

P/S: This command should be executed every merge or rebase that includes any changes in `package-lock.json`.

P/S: `npm install` is not safe to use on fresh install. Use it if you know what you are doing.

### Start development server

```sh
npm run dev
```

Development environment means that every code changes under project directory will trigger a restart to start the service with the new code.
There will also be some tools or config that make debugging easier.
The database under this mode will automatically be wiped up every startup.

#### Quality of life note

You should run the services in 2 processes: 1 for server, 1 for client. With this, you can easily tracking development logs separately between client and server. There is also an issue with Create React App that it always cleans your console output every time you change the code.

* For the server:

```sh
npm run dev:server
```

* For the client:

```sh
npm run dev:client
```

## Docker

### For docker lovers

Running `npm run prisma` will bring up the prisma service without any additional configurations except a running Docker host.

### For docker haters

It is fine if you don't want to use docker at all. The only part of the application that requires docker is the Prisma service. To completely ignore docker, you can open <https://app.prisma.io/> dashboard and create your own service. Then you will need to change `PRISMA_ENDPOINT` in server/.env file to the endpoint to your service. The first time running with it will require authentication, so try running `npm run start:prisma:deploy` first before actually start the service to prevent unknown bugs. Happy coding!

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fpenta-jelly%2Fre-radio.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fpenta-jelly%2Fre-radio?ref=badge_large)
