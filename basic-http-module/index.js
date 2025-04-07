const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Welcome to Home");
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("This is Contact Page");
  } else if (req.url === '/api/user') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ name: 'Node Js' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("404 Not Found");
  }
});

// Listen to the port
server.listen(3000, () => {
  console.log("Server is listening on the port 3000");
});
