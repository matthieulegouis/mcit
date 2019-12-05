FROM node:alpine
WORKDIR /app
COPY backend /app
COPY build /build
ENV PATH /app/node_modules/.bin:$PATH
RUN apk add --no-cache git
RUN npm ci
RUN npm install
CMD npm start
