# syntax=docker/dockerfile:1

FROM node:12-alpine
ENV NODE_ENV=production

WORKDIR /home

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

CMD ["npm", "run", "build"]
