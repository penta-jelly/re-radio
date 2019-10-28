#!/bin/bash

cp ./server/.env.example ./server/.env
cp ./client/.env.example ./client/.env

# Merge other mono repository dotenv files into 1 global file
cat server/.env client/.env > .env

# Default environment variables
echo "SERVER_PORT=8000" >> .env
echo "CLIENT_PORT=3000" >> .env
echo "RESTART_POLICY=no" >> .env

# Base executed script
base="docker-compose \
  -f ./server/docker-compose.db.yml \
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
