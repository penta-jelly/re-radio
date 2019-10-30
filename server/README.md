# re-radio-server

## Requirement

* NodeJS: 10.x
* Npm: 6.x
* Docker: 18.x (Optional)
* Docker Compose: 1.x (Optional)

## Development guideline

### Database

You can either use your own database instance (by configuring environment variable, see `.env.example` file) or using dedicated database container specified in `docker-compose.db.yml` file. If you want to use local development database, run: 

```sh
npm run db
```

It will include a Postgres database instance (at port `5432` or `$DB_PORT`) and PG Admin 4 instance (at port `3001` or `$PGADMIN_PORT`). To config the PG Admin 4 instance, follow these steps:

* Access port `3001` or `$PGADMIN_PORT` on your local machine then login with:
    
    ```
    username: admin@reradio.com (or $PGADMIN_DEFAULT_EMAIL)
    password: 123456 (or $PGADMIN_DEFAULT_PASSWORD)
    ```
  
* Create a server with these **Connection** properties:

    ```
    Host name/address: re-radio_postgres
    Port: 5432
    Username: reradio (or $DB_USER)
    Password: reradio (or $DB_PASSWORD)
    ```

**Note**: any value that contains `or $RANDOM_STRING` can be configured via environment variables. see `.env.example` file for more information.

### Start development server

* Start development server

```sh
npm run dev
```
