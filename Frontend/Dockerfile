FROM node:18.20-alpine as build-stage

WORKDIR /usr/app

COPY ./package*.json ./
RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /usr/app/dist /usr/share/nginx/html

COPY ./.nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
