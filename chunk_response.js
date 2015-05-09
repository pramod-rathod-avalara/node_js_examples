var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.write('Response Start\n');

  setTimeout(function() {
    response.end('Response end\n');
  }, 1000);
}).listen(3001).close();

console.log('Server running at http://127.0.0.1:3001/');