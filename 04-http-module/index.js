/**
 * Simple nodjs web server
 */
var http = require ('http');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});//add an http header.
    res.write('Hello World!');//write a response to the client
    var q = url.parse(req.url, true).query;
    var txt = q.year + ' '+q.month+' '+q.day;
    res.write("<br />"+txt);//write a response to the client
    res.end();//end the response
}).listen(8080);//server object listens on port 8080

//The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.

//run this using following url
//http://localhost:8080/?year=1991&month=September&day=23