# Use official Node.js image as base
FROM node:16-alpine

# Create and set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the NestJS application
RUN npm run build

# Expose application port
EXPOSE 3000

# Start the NestJS application
CMD ["npm", "run", "start:prod"]
