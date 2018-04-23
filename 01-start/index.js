/**
 * Starting with creating a plane server
 */

// for help please see: https://www.w3schools.com/nodejs/nodejs_get_started.asp

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);