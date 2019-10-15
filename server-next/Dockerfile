FROM node:10.16.0-alpine

WORKDIR /user/app

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY .env.example .env
COPY . .

RUN npm run type-check
RUN npm run lint

CMD [ "npm", "start" ]
