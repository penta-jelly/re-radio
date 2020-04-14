# re-radio

[![Integration test status Status](https://github.com/penta-jelly/re-radio/workflows/Integration%20testing/badge.svg)](https://github.com/penta-jelly/re-radio)
[![GCP deployment status](https://github.com/penta-jelly/re-radio/workflows/Google%20Cloud%20Platform%20deployment/badge.svg)](https://github.com/penta-jelly/re-radio)
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
* NodeJS: 10.x
* NPM: 6.x

### Build

```sh
npm install && npm run initialize && npm run compile
```

### Start

#### Run the application

```sh
npm start
```

## All services

Assume there is no customized configuration and we are talking about *localhost*.

* Database:
  * PostgreSQL (See [.env.example](./server/.env.example))
  * PG Admin: [http://localhost:3001](http://localhost:3001) (`admin@reradio.com`/`123456`. See [.env.example](./server/.env.example))
  * Redis (See [.env.example](./server/.env.example))
* Server: [http://localhost:2996/graphql](http://localhost:2996/graphql)
* Client: [http://localhost:3000](http://localhost:3000)

## Development guideline

### Start all development servers

```sh
npm run dev
```

Also, see [re-radio wiki](https://github.com/penta-jelly/re-radio/wiki) for more information.

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fpenta-jelly%2Fre-radio.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fpenta-jelly%2Fre-radio?ref=badge_large)
