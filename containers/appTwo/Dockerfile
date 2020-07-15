FROM node:12-stretch

USER node

WORKDIR /home/node/code

# Copy everything form here to there
COPY --chown=node:node . .

CMD [ "node",  "index.js" ]