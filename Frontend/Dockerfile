# baseimage
FROM node:18.20-alpine as build-stage

# download and install program 

WORKDIR /usr/app

COPY ./package*.json ./
RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx:stable-alpine as production-stage
# Copy the build application from the previous stage to the Nginx container
COPY --from=build-stage /usr/app/dist /usr/share/nginx/html
# Copy the nginx configuration file
COPY ./.nginx/default.conf /etc/nginx/conf.d/default.conf
# Expose the port 80
EXPOSE 8080
# Start Nginx to serve the application
CMD ["nginx", "-g", "daemon off;"]
