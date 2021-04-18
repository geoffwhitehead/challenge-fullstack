
FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/api .
ENV PORT=3333
EXPOSE ${PORT}
RUN yarn --production
RUN yarn add reflect-metadata tslib rxjs hbs pg
CMD node ./main.js