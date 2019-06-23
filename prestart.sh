#!/bin/bash

# Get the current IP of the host machine using Docker Toolbox
host=`docker-machine ip || echo localhost`

# Replace the service host variable in client environment
sed -i "s/REACT_APP_SERVICE_HOST=.*/REACT_APP_SERVICE_HOST=$host/g" ./client/.env

# Merge other mono repository dotenv files into 1 global file
cat server/.env client/.env > .env
echo "HOST_NAME=$host" >> .env
