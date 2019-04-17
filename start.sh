#!/bin/bash

cp ./server/.env.example ./server/.env
cp ./client/.env.example ./client/.env

# Merge other mono repository dotenv files into 1 global file
cat server/.env client/.env > .env
# Default environment variables
echo "DOCKER_HOST_DB_PORT=5432" >> .env
echo "DOCKER_HOST_PRISMA_PORT=4466" >> .env
echo "DOCKER_HOST_CLIENT_PORT=3000" >> .env
echo "DOCKER_HOST_SERVER_PORT=8000" >> .env
echo "DOCKER_CONTAINER_RESTART_POLICY=no" >> .env

# Base executed script
base="docker-compose \
  -f ./compose/docker-compose.db.yml \
  -f ./compose/docker-compose.yml \
  --project-directory . \
"

case "$1" in
'up' | 'down' | 'start' | 'stop' | 'config' | 'build')
  eval "$base $1 $2 $3"
;;
*)
  eval "$base up $1 $2"
esac
