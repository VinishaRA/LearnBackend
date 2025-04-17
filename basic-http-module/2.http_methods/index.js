const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/product') {
    if (req.method === 'GET') {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Getting product list");
    } else if (req.method === 'POST') {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Adding a product");
    } else if (req.method === 'PUT') {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Updating a product");
    } else if (req.method === 'DELETE') {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Deleting a product");
    } else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Method Not Allowed");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(4001, () => {
  console.log('Server is listening on the port : 4001');
});
