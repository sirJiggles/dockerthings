# Build time stage, at this point we will use node 12 stretch to just get
# the packages and copy all the things over
FROM node:12-stretch as build
# We can just do this as root now as we will switch user later
WORKDIR /build
COPY package-lock.json package.json ./
RUN npm ic
COPY . .

# Runtime stage, what we will actually run in the end. we want this
# nice and small
FROM alpine:3.10

# Alpine package manager (update first) get node, we don't need NPM now
# as we used it already in the build stage for getting the packages
RUN apk add --update nodejs

# Add a user called node in the group node
RUN addgroup -S node && adduser -S node -G node

# Switch to the node user
USER node

# so we own the dir
RUN mkdir /home/node/code
WORKDIR /home/node/code

# Now we can grab the files that we made in build, when we needed npm
COPY --from=build --chown=node:node /build .

CMD [ "node",  "index.js" ]