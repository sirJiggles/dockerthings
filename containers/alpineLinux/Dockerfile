FROM alpine:3.10

# Alpine package manager (update first) get node and npm
RUN apk add --update nodejs npm

# Add a user called node in the group node
RUN addgroup -S node && adduser -S node -G node

# Switch to the node user
USER node

# so we own the dir
RUN mkdir /home/node/code

WORKDIR /home/node/code

# copy the package and the lock file, then run yarn. This means
# if the code changes later then we can use the modules
# from the cache and not re-download them all the time if no
# node modules where changed
COPY --chown=node:node package-lock.json package.json ./

# Install all the deps, ic is from lock file
RUN npm ic

# Copy everything form here to there
COPY --chown=node:node . .


CMD [ "node",  "index.js" ]