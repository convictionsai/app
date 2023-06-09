FROM node:16-alpine AS build

ARG GITHUB_TOKEN
ARG CONFIGURATION

WORKDIR /app

COPY .npmrc /root/.npmrc

RUN echo -e "@convictionsai:registry=https://npm.pkg.github.com\n//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> /root/.npmrc

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install --force

COPY src src
COPY tsconfig.json tsconfig.json
COPY tsconfig.app.json tsconfig.app.json
COPY tsconfig.spec.json tsconfig.spec.json
COPY angular.json angular.json
COPY tailwind.config.js tailwind.config.js

RUN npm run build:${CONFIGURATION}

FROM nginxinc/nginx-unprivileged:stable-alpine

COPY --from=build /app/dist/app /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
