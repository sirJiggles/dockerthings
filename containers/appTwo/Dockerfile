FROM node:12-stretch

# Add Tini (so we can kill it from outside)
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

USER node

# so we own the dir
RUN mkdir /home/node/code

WORKDIR /home/node/code

# Copy everything form here to there
COPY --chown=node:node . .

# Install all the deps
RUN yarn

CMD [ "node",  "index.js" ]