# Dockerfile
# ---- Base Node ----
FROM node:18 AS base

# Set work directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# ---- Copy Files/Build ----
FROM base AS build
WORKDIR /src
COPY . /src/
