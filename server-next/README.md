# re-radio-server

## Requirement

* Docker: 18.x
* Docker Compose: 1.x
* NodeJS: 10.x
* Npm: 6.x

* Allow docker-users group to have Full Control access to project files because there is a need of using mounted driver for development.

## Development guideline

### Requirement

* NodeJS: 10.x
* Npm: 6.x

### Start development server

* Start a PostgreSQL database docker container 

```sh
npm run db
```

* Start development server

```sh
npm run dev
```
