FROM node:10-alpine

WORKDIR /user/app

ARG PRISMA_VERSION

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY .env.example .env
COPY . .

RUN npm install -g wait-on@latest prisma@${PRISMA_VERSION}

RUN npm run build

CMD [ "npm", "start" ]
