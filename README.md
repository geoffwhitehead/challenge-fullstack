# Challenge-fullstack

# Description

Nx is used to scaffold the monorepo, the api is built using Nest.js, and the ui is built with React. Postgres is used as the database and is ran from docker locally and a heroku managed service in deployment.

# Requirements

- docker (for running backend services locally)
- docker-compose (for running backend services locally)
- node
- yarn

# Instructions

Hosted with heroku at `https://fullstack-gw.herokuapp.com/`.

The ui is statically hosted from `/` and the api is accessed from `/api`.

For enabling / disabling the users grid. `user: user@test.com / password: Password1!`

**Note: JWT's are used for authentication with an expiry of 60s. Session / refresh token haven't been implemented so redirection to the login page will occur when trying to update the user grid with an expired token.**

## API Docs / Swagger

You can view the swagger docs by navigating to `<baseUrl>/api`.

## Running locally

### Front end only using hosted backend services

Run `yarn dev:ui` in the root directory.

### Backend services

1. Create a `.env` file in `/api` containing the following.

```
JWT_KEY=<mySecretKey>
AWS_ACCESS_KEY=<mySecretKey>
AWS_SECRET_ACCESS_KEY=<mySecretKey>
S3_BUCKET=<myBucketName>
```

**You can enter any values here but Localstack isn't set up at the moment, so without valid s3 keys user creation wont work.**

2. Build the docker image by running `yarn nx deploy api`

3. Run `docker-compose up` in the root directory. This will host the node server on `localhost:3333` and postgres on `localhost:5432`

Alternatively you can also serve the api using nx with `yarn dev api`.

### Front end

Run `yarn dev ui` in the root directory.

# Future improvements

- Expand ui testing
- Add CI/CD pipeline
- Improve UI styling
- Improve logging
- Refresh / session tokens
- Use multer-s3 to immediately store assets in s3
- Store auth users credentials in db.
- Localstack to allow s3 asset creation without an aws s3 account.
