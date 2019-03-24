# re-radio

## Requirement

* Docker: 18.x
* Docker Compose: 1.x
* NodeJS: 10.x
* Npm: 6.x

* Allow docker-users group to have Full Control access to project files because there is a need of using mounted driver for development.

## Install dependencies

```sh
sh install.sh
```

## Start all services using development environment

```sh
sh dev.sh up
```

## Clean up containers data

```sh
sh dev.sh down
```

## All services:

* Server: [http://localhost:8000/graphql](http://localhost:8000/graphql)
* Client: [http://localhost:3000](http://localhost:3000)
* Storybook: [http://localhost:4000](http://localhost:4000)
