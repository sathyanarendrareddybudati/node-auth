FROM node:alpine

# Create app directory
WORKDIR /node-auth

COPY package*.json .

RUN npm install

# Copy the entire application code to the image
COPY . .

EXPOSE 3000

CMD npm app.js