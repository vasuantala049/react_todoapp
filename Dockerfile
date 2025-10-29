FROM node AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN rm -f package-lock.json && npm install && npm install autoprefixer

COPY . .

RUN npm rebuild rollup && npm run build

FROM nginx:1.22-alpine 

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder usr/src/app/dist/ usr/share/nginx/html

EXPOSE 8080



