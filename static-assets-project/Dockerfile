# Build stage
FROM node:12-stretch as build
WORKDIR /app

# Install the deps
COPY package-lock.json package.json ./
RUN npm ic

# Copy all the things
COPY . .

# Build the project (will put everything into build)
RUN npm run build

# Runtime stage
FROM nginx:stable

# we can use the nginx user that comes with the machine
COPY --from=build /app/build /usr/share/nginx/html

