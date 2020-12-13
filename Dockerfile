FROM node:14
RUN mkdir -p /user/src/server
WORKDIR /user/src/server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
