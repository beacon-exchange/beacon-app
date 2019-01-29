FROM node:carbon-slim
MAINTAINER Charles Cooper <cooper.charles.m@gmail.com>

# RUN npm install -g @vue/cli @vue/cli-service-global
# RUN npm install --save sass-loader node-sass

RUN apt-get update -qq
RUN apt-get install -qq -y --fix-missing --no-install-recommends entr make

RUN wget -nv https://github.com/sass/dart-sass/releases/download/1.1.1/dart-sass-1.1.1-linux-x64.tar.gz
RUN tar xf dart-sass-1.1.1-linux-x64.tar.gz && cp -a dart-sass/* /usr/local/bin/

RUN npm install -g handlebarsjs-cli livereload http-server

RUN which sass

WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
#COPY package*.json ./

# install project dependencies
#RUN npm install

COPY . .
