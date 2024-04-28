# Stage 1: Build the NextJS application
FROM node:18-alpine AS builder
WORKDIR /app
# Copy  package.json and package-lock.json separately to leverage Docker cache
COPY package.json package-lock.json ./
# Install dependencies using npm
RUN npm ci --silent
COPY . .
RUN npm run build

# Stage 2: Setup the production environment
FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Use a non-root user to run our application
USER node

EXPOSE 3000

CMD ["npm", "start"]
