FROM node:12-alpine

# Add Tini (so we can kill it from outside)
# ENV TINI_VERSION v0.19.0
# ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
# RUN chmod +x /tini
# ENTRYPOINT ["/tini", "--"]

USER node

# so we own the dir
RUN mkdir /home/node/code

WORKDIR /home/node/code

# copy the package and the lock file, then run yarn. This means
# if the code changes later then we can use the modules
# from the cache and not re-download them all the time if no
# node modules where changed
COPY --chown=node:node yarn.lock package.json ./

# Install all the deps
RUN yarn

# Copy everything form here to there
COPY --chown=node:node . .


CMD [ "node",  "index.js" ]