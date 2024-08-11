# pull official base image
# https://hub.docker.com/_/node/tags
FROM node:20.16.0-alpine

# set working directory
WORKDIR /elme-background

# add app
COPY ./ ./

# install app dependencies
RUN yarn install --quiet

# start app
CMD ["yarn", "start"]
