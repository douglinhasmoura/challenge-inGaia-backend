FROM node:alpine

WORKDIR /usr/api01

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3001

CMD ["yarn", "dev:server" ]