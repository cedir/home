# syntax=docker/dockerfile:1

FROM node:current-alpine3.17

WORKDIR /home

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --force

COPY . .

CMD ["npm", "run", "dev"]
