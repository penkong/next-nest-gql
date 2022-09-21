# use docker image scanner.
# it is better PID in code
FROM node:18-alpine

RUN apk add --no-cache bash tini curl
RUN npm install -g pnpm
ENV PNPM_HOME="/usr/local/bin/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# ENV REDIS=http://127.0.0.1

RUN mkdir -p /app
WORKDIR "/app"

ARG NODE_ENV

COPY package*.json ./
COPY .npmrc ./

RUN npm install -g @nestjs/cli

RUN chown -R node:node .
USER node
RUN pnpm config set unsafe-perm true


# # we use npm ci here so only the package-lock.json file is used
RUN pnpm i


COPY --chown=node:node . .


RUN cd /app/src

EXPOSE 3300


# # entrypoint frist run and wrap cmd
# # tini run as main process and if we SIGINT or SIGTERM
# # it will remove node process as zombie process .
ENTRYPOINT [ "/sbin/tini" , "--" ] 
RUN printenv
RUN ls
CMD [ "pnpm" , "run" , "start:dev" ]


