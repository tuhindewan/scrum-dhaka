FROM node:18-alpine
ARG ARCH=amd64

ENV PORT 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm","start"]
