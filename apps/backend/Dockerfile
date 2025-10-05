# Multi-stage build for Power Solar Backend
FROM node:18-alpine AS builder

WORKDIR /app

# Copy workspace configuration
COPY ../../package.json ../../pnpm-lock.yaml ../../pnpm-workspace.yaml ./
COPY ../../packages/shared-types ../packages/shared-types/

# Install pnpm
RUN npm install -g pnpm@8

# Copy backend source
COPY package.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY src ./src

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build shared types first
WORKDIR /app/../packages/shared-types
RUN pnpm install && pnpm build

# Build backend
WORKDIR /app
RUN pnpm build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install production dependencies only
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
RUN npm install -g pnpm@8 && pnpm install --prod --frozen-lockfile

# Copy built application
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/../packages/shared-types/dist ../packages/shared-types/dist

# Set environment
ENV NODE_ENV=production
ENV PORT=8080

# Expose port (Cloud Run uses 8080 by default)
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s \
  CMD node -e "require('http').get('http://localhost:8080/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start application
CMD ["node", "dist/main.js"]

