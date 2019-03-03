# re-radio server documentation

## Requirement

* Docker: 18.x
* Docker Compose: 1.x
* NodeJS: 10.x
* Npm: 6.x

## One command to rule them all

```sh
npm run docker-compose:start
```

This commands will include these containers:

* A Mongo Database container

* A Prisma server container

* A re-radio server container

P/S: to stop the service

```sh
npm run docker-compose:stop
```

## Development guideline

### Start the Prisma service

#### To start the service

```sh
npm run prisma:up
```

This commands will include these containers:

* A Mongo Database container

* A Prisma server container

#### To stop the service

```sh
npm run prisma:stop
```

### Modify host file

* Due to some limitation with .env configuration. We need to modify the host file in the system to be able to access the containers without changing the .env to frequently

* Add these lines to the host file

```text
...

127.0.0.1 prisma
127.0.0.1 mongo
```

### Start the development server on host machine

```sh
npm start
```

```sh
npm run dev
```
