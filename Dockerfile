FROM node:alpine

RUN npm install -g @vue/cli @vue/cli-service-global
RUN npm install sass-loader node-sass

WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
#COPY package*.json ./

# install project dependencies
#RUN npm install

COPY . .

ENTRYPOINT ["vue"]
