FROM node:18-alpine AS development
RUN apk add --no-cache bash tini curl
RUN npm install -g pnpm
ENV PNPM_HOME="/usr/local/bin/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=development
COPY package*.json ./
COPY .npmrc ./
RUN pnpm i
EXPOSE 3000
ENTRYPOINT [ "/sbin/tini" , "--" ] 
CMD [ "pnpm" , "run" , "dev" ]

# ===============================================

# FROM node:18-alpine AS dependencies
# ENV NODE_ENV=production
# WORKDIR /app
# COPY package.json yarn.lock ./
# RUN yarn install --frozen-lockfile

# # -----------------------------------------------

# FROM node:18-alpine AS builder
# ENV NODE_ENV=development
# WORKDIR /app
# COPY . .
# RUN yarn install --frozen-lockfile && NODE_ENV=production yarn build

# FROM node:18-alpine AS production
# WORKDIR /app
# ENV HOST=0.0.0.0
# ENV PORT=3000
# ENV NODE_ENV=production
# COPY --chown=node --from=builder /app/next.config.js ./
# COPY --chown=node --from=builder /app/public ./public
# COPY --chown=node --from=builder /app/.next ./.next
# COPY --chown=node --from=builder /app/yarn.lock /app/package.json ./
# COPY --chown=node --from=dependencies /app/node_modules ./node_modules
# USER node
# EXPOSE 3000
# CMD [ "yarn", "start" ]

