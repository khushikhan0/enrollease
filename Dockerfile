# Use the official Node.js image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application (from the root directory)
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the build
RUN npm install -g serve

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the application
CMD ["serve", "-s", "build"]