FROM node:16-alpine

RUN mkdir -p /usr/app/

WORKDIR /usr/app/

COPY package*.json .

RUN yarn install

COPY ./ ./

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]