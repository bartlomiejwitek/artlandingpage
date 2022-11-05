FROM node:16-alpine

ENV PORT 3000

# Create app directory
WORKDIR /app

# Installing dependencies
COPY package*.json /app
RUN npm install

COPY next.config.js ./next.config.js
COPY pages ./pages
COPY public ./public
COPY styles ./styles

CMD ["next", "dev"]


