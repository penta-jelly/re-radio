# re-radio

## Introduction

```txt
TODO: This section need to be updated
```

## Installation guide

### System requirement

* Docker: 18.x [Windows users](https://github.com/penta-jelly/re-radio/wiki/Docker-for-Windows)
* Docker Compose: 1.x
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

## All services

* Prisma:
  * GraphQL Playground: [http://localhost:4466](http://localhost:4466)
  * Admin: [http://localhost:4466/_admin](http://localhost:4466/_admin)
* Server: [http://localhost:8000/graphql](http://localhost:8000/graphql)
* Client: [http://localhost:3000](http://localhost:3000)
* Storybook: [http://localhost:4000](http://localhost:4000)
