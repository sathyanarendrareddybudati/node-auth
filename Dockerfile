FROM node:20-slim

# Create app directory
WORKDIR /node-auth

RUN npm install

# Copy the entire application code to the image
COPY . .

EXPOSE 3000

CMD node app.js