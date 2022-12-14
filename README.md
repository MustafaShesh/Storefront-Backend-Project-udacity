# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express Storesront backend project in constructing an API

## Technologies

-   Postgres for the database
-   Node/Express for the application logic
-   dotenv from npm for managing environment variables
-   db-migrate from npm for migrations
-   jsonwebtoken from npm for working with JWTs
-   jasmine from npm for testing

## Steps to Completion

### 1. Creating database

-   it's name in .env file and the default PostgreSQL port is 5432 .

### 2. Run migrations

-   you can run migrations through 'db:migrate up'

### 3. API Routes

-   you can find the routes under 'src/routes' or in `REQUIREMENTS.md` document

### 4. Scripts

-   All scripts you need to run in `package.json`

### 5. For the Unit Testing

-   first, you have to change the environment to test in .env file
    **Example**: ENV=test
-   otherwise it will drop errors in dev environment
-   you can drop the test database any time by running script 'npm run drop'

### 6. Environment variables (dotenv):

-   POSTGRES_HOST=localhost
-   POSTGRES_DB=store_front
-   POSTGRES_TEST_DB=store_front_test
-   POSTGRES_USER=postgres
-   POSTGRES_PASSWORD=Mustafa95
-   POSTGRES_PORT=5432
-   ENV=dev
-   BCRYPT_PASSWORD=speak-friend-and-enter
-   SALT_ROUNDS=10
-   TOKEN_SECRET=sekobeko
