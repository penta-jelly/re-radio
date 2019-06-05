FROM node:10.16.0-alpine as build-stage

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY .env.example .env
COPY . .

RUN npm run type-check
RUN npm run lint
RUN npm run build

FROM nginx:1.17.0-alpine as bundle-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
