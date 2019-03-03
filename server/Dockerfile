FROM node:10-alpine

WORKDIR /user/app

RUN npm install -g wait-on prisma

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY .env.example .env
COPY . .

CMD [ "npm", "start" ]
