FROM node:10-alpine

WORKDIR /user/app

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY .env.example .env
COPY . .

RUN npm install -g wait-on prisma

CMD [ "npm", "start" ]
