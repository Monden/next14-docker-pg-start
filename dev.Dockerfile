# https://hub.docker.com/_/node
FROM node:20-alpine AS base

# エラーになったら戻す
# USER node

# Install dependencies
WORKDIR /app
COPY ./package.json ./
COPY ./prisma ./prisma
# COPY --chown=node:node ./package.json ./
# COPY --chown=node:node ./prisma ./prisma
RUN npm install
