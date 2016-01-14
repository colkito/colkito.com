'use strict';

var http = require('http'),
    data = require('./index.json');

var port = process.env.PORT || 5000,
    ip = '0.0.0.0';

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.write(JSON.stringify(data, null, 2));
  res.end();
});

server.listen(port, ip);

console.log('Server running at http://'+ ip +':'+ port +'/');
