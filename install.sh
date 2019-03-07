#!/bin/bash

cd server 
npm ci

cd ..
cd client 
npm ci

cd ..
cd testing
npm ci
