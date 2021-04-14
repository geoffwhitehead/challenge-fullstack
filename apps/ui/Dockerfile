FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/ui .
ENV PORT=4200
EXPOSE ${PORT}
RUN npm install --production
CMD node ./main.js