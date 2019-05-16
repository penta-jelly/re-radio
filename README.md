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

* Docker: 18.x
* Docker Compose: 1.24

### Build & start

```sh
sh start.sh
```

**Note**: To stop and clean up all services: run `sh start.sh down`.

## All services

Assume there is no customized configuration and we are talking about *localhost*.

* Prisma:
  * GraphQL Playground: [http://localhost:4466](http://localhost:4466)
  * Admin: [http://localhost:4466/_admin](http://localhost:4466/_admin)
* Server: [http://localhost:8000/graphql](http://localhost:8000/graphql)
* Client: [http://localhost:3000](http://localhost:3000)

## Development guideline

### Development system requirement

* Docker: 18.x [Windows users](https://github.com/penta-jelly/re-radio/wiki/Docker-for-Windows)
* Docker Compose: 1.24
* NodeJS: 10.x
* Npm: 6.x

### Install dependencies

```sh
sh install.sh
```

P/S: This command should be executed every merge or rebase that includes any changes in `package-lock.json`.

P/S: `npm install` is not safe to use on fresh install. Use it if you know what you are doing.

### Start services under development environment

Development environment means that every code changes under project directory will trigger a restart to start the service with the new code.
There will also be some tools or config that make debugging easier.
The database under this mode will automatically be wiped up every startup.

#### Start services

```sh
sh dev.sh up
```

#### Stop and clean up services

```sh
sh dev.sh down
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fpenta-jelly%2Fre-radio.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fpenta-jelly%2Fre-radio?ref=badge_large)
