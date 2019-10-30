FROM node:10.16.0-alpine AS server-bundle-stage

WORKDIR /user/app

COPY . .

RUN npm install
RUN npm run install:dependencies -- --ignore re-radio-e2e
RUN npm run initialize

RUN npm run compile && npm run lint

WORKDIR /user/app/server

FROM nginx:1.17.3-alpine AS client-bundle-stage
COPY --from=server-bundle-stage /user/app/client/build /usr/share/nginx/html
COPY --from=server-bundle-stage /user/app/client/nginx.conf /etc/nginx/nginx.conf
