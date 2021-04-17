# Challenge-fullstack

# Description

Nx is used to scaffold the monorepo with the api built using nest js, and ui in React. Postgres is used as the database and is ran from docker locally. A heroku managed service is used in deployment.

# Requirements

- docker
- docker-compose
- node

# Instructions

Hosted with heroku at `https://fullstack-gw.herokuapp.com/`.

The ui is statically hosted from `/` and the api is accessed from `/api`.

For enabling / disabling the users grid. `user: user@test.com / password: Password1!`

**Note: JWT's are used for authentication with an expiry of 60s. Session / refresh token haven't been implemented so redirection to the login page will occur when trying to update the user grid with an expired token.**

## Running locally

### Backend services

Run `docker-compose up` in the root directory. This will host the node server on `localhost:3333` and postgres on `localhost:5432`

### Front end

Run `yarn dev ui` in the root directory.

# Future improvements

- Add tests throughout
- Add CI/CD pipeline
- Improve UI styling
- Improve logging
- Refresh / session tokens
- Use multer-s3 to immediately store assets in s3
- Store auth users credentials in db.
