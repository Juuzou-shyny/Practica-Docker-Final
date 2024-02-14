FROM node:19-alpine

WORKDIR /app


COPY mi-app-react/package*.json ./

RUN npm install


COPY mi-app-react/ .

EXPOSE 3000

CMD ["npm", "start"]
