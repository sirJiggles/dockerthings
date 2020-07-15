FROM node:12-stretch

# Add Tini (so we can kill it from outside)
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

# This comes from the node container, they made a user called node
# who could only do node things
USER node

# Put our index file in there, as we need node user to be able
# to run it then we will also chown the file
COPY --chown=node:node index.js index.js

# run it baby
CMD ["node", "index.js"]