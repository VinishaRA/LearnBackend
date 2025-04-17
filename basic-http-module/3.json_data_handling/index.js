const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/user') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const data = JSON.parse(body);
      const name = data.name;
      const age = data.age;

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: `Hi ${name}! You are ${age} years old.` }));
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(4001, () => {
  console.log('Server is listening on the port : 4001');
});
