# App-specific for Stage 2 of node development in Docker
FROM node:lts-bullseye

# Set work directory, create if not existing.
WORKDIR /home/app

# Install nodemon for hot reload
RUN npm install -g nodemon

COPY package.json /home/app

RUN npm install
RUN npx next telemetry disable
