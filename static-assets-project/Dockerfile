# Build stage
FROM node:12-stretch as build

# Install the deps
COPY package-lock.json package.json ./
RUN npm ic

# Copy all the things
COPY . .

# Build the project (will put everything into build)
RUN npm run build


# Runtime stage
FROM nginx:latest

USER nginx

# WORKDIR /home/nginx

# we can use the nginx user that comes with the machine
COPY --from=build --chown=nginx:nginx /build /usr/share/nginx/html

