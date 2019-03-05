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

### Modify host file

* Due to some limitation with .env configuration. We need to modify the host file in the system to be able to access the containers without changing the .env too frequently.

* Add these lines to the host file

```text
...

127.0.0.1 prisma
127.0.0.1 mongo
```

* If you find this frustrating, another option is to run it inside the container. *Using this method, you **will not** have code generation feature support by default, use it at your own risk.* For example, running `npm run prisma:deploy` will be executed as:

```sh
docker-compose run service npm run prisma:deploy
```

P/S: "service" can be replaced with any other names.

### Deploy changed data model

```sh
npm run prisma:deploy
```

Sometimes, you will need to force the database to be updated with whole new structure (refer to Prisma [data model documentation](https://www.prisma.io/docs/datamodel-and-migrations/datamodel-MONGO-knun/) for more information). If so, run command with `-- --force` to override the whole structure, which will cause data loss on database.

### Seed initial data

```sh
npm run worker:seed
```

This script is only executable after running `prisma:deploy` command. Which will seed the basic data like: Admin users, default users,... and more.
