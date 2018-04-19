var http = require('http');
var uc = require('upper-case');
var rs = require('random-sentence');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var text = rs({words:5});
    res.write(text);
    res.write("<br />"+uc(text));
    res.end();
}).listen(8080);