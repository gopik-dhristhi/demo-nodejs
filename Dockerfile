# Use official Node.js 24 image
FROM node:24

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Expose your app port (change if needed)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]