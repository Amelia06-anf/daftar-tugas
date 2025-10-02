# syntax=docker/dockerfile:1
FROM docker.io/library/node:20-alpine AS base

WORKDIR /app

# Install deps first for better caching
COPY package*.json ./
RUN npm install --omit=dev

# Copy source
COPY . .

# Expose app port
EXPOSE 5000

ENV NODE_ENV=production \
    DB_HOST=db \
    DB_USER=app \
    DB_PASSWORD=secret \
    DB_NAME=daftar_tugas

CMD ["npm", "start"]
