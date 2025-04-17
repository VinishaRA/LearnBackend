const http = require('http');

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  if (req.method == 'GET' && parsedUrl.pathname == '/user') {
    const name = parsedUrl.searchParams.get('name');
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ message: `Hello, ${name} Welcome.` }));
  }
});

server.listen(4001,() => {
  console.log('server is listening on the port : 4001');
})