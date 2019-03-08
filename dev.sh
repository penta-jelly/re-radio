#!/bin/bash

# Merge other mono repository dotenv files into 1 global file
cat server/.env client/.env > .env

base="docker-compose \
  -f ./server/database/docker-compose.yml \
  -f ./server/database/docker-compose.mongo.yml \
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
