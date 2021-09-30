# build environment
FROM node:12 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
# RUN npm ci --silent
RUN npm install --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
# new
# COPY ./build /usr/share/nginx/html
# COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# COPY ./nginx/nginx.template /etc/nginx/nginx.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]