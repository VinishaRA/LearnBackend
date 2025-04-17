const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to My Server!');
});

server.listen(4001,() => {
  console.log('server is listening on the port : 4001');
})