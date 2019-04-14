FROM node:10-alpine as build-stage
WORKDIR /app
COPY . /app
RUN npm ci
RUN npm run build

FROM nginx as bundle-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
