FROM node:23-slim

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy all files and build
COPY . .
RUN npm run build

# Expose Vite preview server port
EXPOSE 4174

# Start preview server
CMD ["npm", "run", "preview", "--", "--host"]