FROM node:10 as build-stage
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
