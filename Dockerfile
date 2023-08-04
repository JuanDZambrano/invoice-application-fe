# Dockerfile
# ---- Base Node ----
FROM node:18 AS base

# Set work directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# ---- Copy Files/Build ----
FROM base AS build
WORKDIR /app
COPY . .