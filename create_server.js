var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  console.log(request.url);

  if(request.url == '/hello') {
     response.end('Hello World\n');
   } else {
     response.end('Goodbye World\n');
   }
 
}).listen(3000).close();

console.log('Server running at http://127.0.0.1:3000/');