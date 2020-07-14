FROM node:12-stretch

# Add Tini (so we can kill it from outside)
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

# Put our index file in there
COPY index.js index.js

# run it baby
CMD ["node", "index.js"]