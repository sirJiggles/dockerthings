FROM node:12-stretch

# Add Tini (so we can kill it from outside)
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

# This comes from the node container, they made a user called node
# who could only do node things
USER node

# we know for sure the node user owns it's own dir so
# we make a dir called code where we will put the file
# if dir does not exist it will make it for you
WORKDIR /home/node/code

# Put our index file in there, as we need node user to be able
# to run it then we will also chown the file
COPY --chown=node:node index.js index.js
# you can also use the ADD command if you need to grab something
# from the network like git etc

# run it baby
CMD ["node", "index.js"]