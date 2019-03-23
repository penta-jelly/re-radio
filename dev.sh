#!/bin/bash

# Get the current IP of the host machine using Docker Toolbox
host=`docker-machine ip || echo localhost`

# Replace the service host variable in client environment
sed -i "s/REACT_APP_SERVICE_HOST=.*/REACT_APP_SERVICE_HOST=$host/g" ./client/.env

# Merge other mono repository dotenv files into 1 global file
cat server/.env client/.env > .env
echo "HOST_NAME=$host" >> .env

# Base executed script
base="docker-compose \
  -f ./server/database/docker-compose.yml \
  -f ./server/database/docker-compose.db.yml \
  -f ./server/docker-compose.yml \
  -f ./server/docker-compose.dev.yml \
  -f ./client/docker-compose.dev.yml \
  -f docker-compose.yml \
  -f docker-compose.dev.yml \
  --project-directory . \
"

case "$1" in
'up' | 'down' | 'start' | 'stop' | 'config')
  eval "$base $1 $2 $3"
;;
*)
  echo $"Incorrect usage: It should be one of start, stop, up, down, config. For example:"
  echo $"$0 start"
  exit 1
esac
