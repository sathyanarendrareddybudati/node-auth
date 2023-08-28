FROM node:20

# Create app directory
WORKDIR /node-auth

COPY package*.json .

RUN npm ci

# Copy the entire application code to the image
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]