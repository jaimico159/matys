# build stage
FROM klakegg/hugo:ext-alpine AS build
WORKDIR /src
COPY . .
RUN hugo --minify

# serve stage
FROM nginx:alpine
COPY --from=build /src/public /usr/share/nginx/html
EXPOSE 80
