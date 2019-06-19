#!/bin/bash

function configEnvValues () {
  result="n"
  read -p "Do you want to config the environment variables? (y/n) " result

  if [ "$result" != "n" ]
  then
  
    function replaceEnvValue () {
      read -p "Enter \"$1\": " value
      sed -i "s/$1=.*/$1=$value/g" $2
    }

    echo "You need to answer some questions first."

    cp server/.env.example server/.env
    
    # Specify which environment variable has to be defined
    replaceEnvValue "PRISMA_ENDPOINT" ./server/.env
    replaceEnvValue "YOUTUBE_API_KEY" ./server/.env

    cp client/.env.example client/.env

    echo "Finished environment configuration."
  fi
}

if [ -z "$CI" ]
then
  configEnvValues  
else
  echo "Running hook on CI environment, skip environment variables configuration."
fi
