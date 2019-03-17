#!/bin/bash

cd server
npm ci
cp .env.example .env

cd ..
cd client
npm ci
cp .env.example .env

cd ..
cd e2e
npm ci
