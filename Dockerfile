FROM node:18.13-slim
ADD ./apps /app
WORKDIR /app/web
RUN yarn install
RUN yarn build
CMD [ "npm", "start" ]