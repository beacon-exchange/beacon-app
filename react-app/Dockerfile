# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY public /app/public
COPY src /app/src
RUN npm cache clean --force
RUN npm install webpack@4.41.0
RUN npm install core-js@3
RUN npm install react-router-dom@5.1.2
RUN npm install react-dom@16.12.0
RUN npm install

#start app
CMD ["npm", "start"]
