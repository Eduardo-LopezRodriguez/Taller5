FROM node:16

WORKDIR /to-do-app
EXPOSE 3000
COPY . .
RUN npm install --production
CMD [ "node","app.js" ]
