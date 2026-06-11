# Multi-stage Dockerfile for building a Vite + React app and serving with nginx

# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies first (cache this layer when package.json or lockfile unchanged)
COPY package*.json ./
COPY package-lock.json ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build


# ---- Production stage ----
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom nginx config (if present) to enable SPA fallback and caching
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx in foreground
CMD ["/bin/sh", "-c", "nginx -g 'daemon off;'" ]
