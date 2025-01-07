# Use the official Node.js image as the base
FROM node:22

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml for the API and web
COPY ./api/package.json ./api/pnpm-lock.yaml ./api/
COPY ./web/package.json ./web/pnpm-lock.yaml ./web/

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies for the API and web
RUN cd api && pnpm install
RUN cd ../web && pnpm install

# Copy the rest of the application code
COPY ./api ./api
COPY ./web ./web

# Build the API and web
RUN cd api && pnpm build
RUN cd ../web && pnpm build

# Expose the ports for the API and web
EXPOSE 3000 3001

# Start MongoDB, API, and web
CMD ["sh", "-c", "mongod --fork --logpath /var/log/mongodb.log && cd api && pnpm start:prod & cd ../web && pnpm start"]
