FROM node:13.12.0-alpine as build
WORKDIR /app
RUN rm -Rfv ./*
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
ARG envname

COPY .env.$envname ./.env
RUN rm -rf ./.env.development
RUN rm -rf ./.env.production
RUN rm -rf ./.env.test

RUN npm run build
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080