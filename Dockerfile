FROM node:14
WORKDIR /app
COPY package*.json /app
RUN npm install
copy . .
EXPOSE 3000
CMD ["npm", "run", "start"]
