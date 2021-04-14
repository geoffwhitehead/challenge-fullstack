
FROM node:lts-alpine AS builder
WORKDIR /app
COPY ./dist/apps/ui .
ENV PORT=4200
EXPOSE ${PORT}

