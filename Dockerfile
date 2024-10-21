FROM node:18-alpine3.17
RUN apk update && apk upgrade && apk add --no-cache git

WORKDIR /usr/src/app
COPY package.json .
RUN yarn install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/app.js"]
