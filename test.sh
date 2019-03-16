#!/bin/bash

cp ./server/.env.example ./server/.env
cp ./client/.env.example ./client/.env

# Get the current IP of the host machine using Docker Toolbox
host=`docker-machine ip || echo 127.0.0.1`

# Replace the service host variable in client environment
sed -i "s/REACT_APP_SERVICE_HOST=.*/REACT_APP_SERVICE_HOST=$host/g" ./client/.env

# Merge other mono repository dotenv files into 1 global file
cat server/.env client/.env > .env
echo "HOST_NAME=$host" >> .env

# Base executed script
base="docker-compose \
  -f ./server/database/docker-compose.yml \
  -f ./server/database/docker-compose.mongo.yml \
  -f ./server/docker-compose.yml \
  -f ./client/docker-compose.yml \
  -f docker-compose.yml \
  -f docker-compose.test.yml \
  --project-directory . \
"

eval "$base up --abort-on-container-exit --exit-code-from e2e $1 $2"
