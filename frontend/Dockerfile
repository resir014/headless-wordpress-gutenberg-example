# Dockerfile
FROM node:8.9

# Set environment variables
ENV APPDIR /code

# Set the work directory
RUN mkdir -p ${APPDIR}
WORKDIR ${APPDIR}

ADD . ${APPDIR}

RUN npm install -g pm2
RUN npm install -g yarn
RUN yarn install
RUN yarn build

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV:-production}

RUN rm .npmrc
RUN rm -rf docker

EXPOSE 3000
CMD [ "yarn", "start" ]
