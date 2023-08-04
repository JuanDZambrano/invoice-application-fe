# Dockerfile
# ---- Base Node ----
FROM node:18 AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
