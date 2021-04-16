# Challenge-fullstack

# Description

Nx is used to scaffold the monorepo with the api built using nest js, and ui in React. Postgres is used as the database and is ran from docker locally. A heroku managed service is used in deployment.

# Requirements

- docker
- docker-compose
- node

# Instructions

Hosted with heroku at `https://fullstack-gw.herokuapp.com/`.

The ui is statically hosted from `/` and the api is accessed from `https://fullstack-gw.herokuapp.com/api`

## Running locally

### Backend services

Run `docker-compose up` in the root directory. This will host the node server on `localhost:3333` and postgres on `localhost:5432`

### Front end

Run `yarn dev ui` in the root directory.

# Future improvements

- Add tests throughout
- Store the images in an asset store like S3
- Improve UI styling
- Improve logging
