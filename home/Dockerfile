# syntax=docker/dockerfile:1

FROM node:12-alpine

WORKDIR /home

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --force

COPY . .

CMD ["npm", "run", "build"]
