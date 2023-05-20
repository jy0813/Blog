FROM node:16-alpine3.11
WORKDIR /app
COPY package*.json ./
COPY src/ ./
RUN npm install --force
COPY . .
CMD [ "npm", "start" ]
EXPOSE 3000