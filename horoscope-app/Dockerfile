#Stage 1
FROM node:17-alpine as builder
WORKDIR /horoscope-app
COPY package.json .
COPY package-lock.json .
RUN npm install 
COPY . .
RUN npm run build

#Stage 2
FROM  nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /horoscope-app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]