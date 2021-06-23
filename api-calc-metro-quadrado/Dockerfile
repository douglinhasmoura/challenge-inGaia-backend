FROM node:alpine

WORKDIR /usr/api02

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev:server" ]