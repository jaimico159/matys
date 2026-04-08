# build stage
FROM ghcr.io/gohugoio/hugo:v0.160.0-ext AS build
WORKDIR /src
COPY . .
RUN hugo --minify

# serve stage
FROM nginx:alpine
COPY --from=build /src/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
