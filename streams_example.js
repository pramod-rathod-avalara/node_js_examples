var http = require('http');
var fs = require('fs');
var path = require('path');

var regex = /path=/i;
var server = http.createServer(function(req, res) {
  var url = req.url;

  if(regex.test(url)) {
    var fname = path.join(__dirname, url.slice(6));
    console.log("fname => " + fname);

    var file = fs.createReadStream(fname, {encoding:'utf8'});
    file.pipe(res);
  }
  else {
    res.end('provide a file name');
  }
});

server.listen(3000);//.close();