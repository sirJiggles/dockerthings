const http = require('http');

// This is how you should handle killing of the node app
// process.on('SIGTERM', ...;

http
  .createServer(function (req, res) {
    console.log('request received');
    res.end('omg hi', 'utf-8');
  })
  .listen(3000);

console.log('server started');
