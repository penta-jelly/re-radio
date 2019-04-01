# re-radio-server

## Requirement

* Docker: 18.x
* Docker Compose: 1.x
* NodeJS: 10.x
* Npm: 6.x

* Allow docker-users group to have Full Control access to project files because there is a need of using mounted driver for development.

## One command to rule them all

```sh
npm run docker-compose:up
```

This commands will include these containers:

* A Mongo Database container

* A Prisma server container

* A re-radio server container that enables a nodemon process

* Server will be served at [http://localhost:8000/graphql](http://localhost:8000/graphql)

## Development guideline

### Typescript watch mode

After starting the container, run

```sh
npx tsc -w
```

concurrently in another process to make sure that every changes in the typescript code will persist into the container.

### Deploy changed data model

```sh
npm run prisma:deploy
```

Sometimes, you will need to force the database to be updated with whole new structure (refer to Prisma [data model documentation](https://www.prisma.io/docs/datamodel-and-migrations/datamodel-MONGO-knun/) for more information). If so, run command with `-- --force` to override the whole structure, which will cause data loss on database.

### Seed initial data

```sh
npm run prisma:seed
```

This script by default is executed after running `prisma:deploy` command.
