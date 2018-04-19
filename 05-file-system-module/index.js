/**
 * Everything works but there are errors because of resource deadlocks.
 */

var http = require ('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('demo1.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });

    /*First file*/
    fs.open('demo.txt','w',function(err,file){
        if(err) throw err;
        console.log('Opened')
    });
    fs.writeFile('demo.txt','Hello Content!',function(err){
        if(err) throw err;
        console.log('Written')
    });
    fs.appendFile('demo.txt',' New Content!',function(err){
        if(err) throw err;
        console.log('Updated!');
    });

    /*Second file*/
    fs.writeFile('demo1.txt','Hello Content!',function(err){
        if(err) throw err;
        console.log('Written')
    });
    fs.appendFile('demo1.txt',' New Content!',function(err){
        if(err) throw err;
        console.log('Updated!');
    });
    //replace code.
    fs.writeFile('demo1.txt','Replaced Content!',function(err){
        if(err) throw err;
        console.log('Written')
    });

    //demo3 to be deleted.
    fs.open('demo3.txt','w',function(err,file){
        if(err) throw err;
        console.log('Demo3 Opened')
    });
    fs.writeFile('demo3.txt','Replaced Content!',function(err){
        if(err) throw err;
        console.log('Written')
    });

    fs.unlink('demo3.txt', function (err) {
        //if (err) throw err;
        console.log('File deleted!');
    });

    fs.open('demo4.txt','w',function(err,file){
        if(err) throw err;
        console.log('Demo4 Opened')
    });

    fs.rename('demo4.txt','renamed.txt', function (err) {
        if (err) throw err;
        console.log('Demo4 file renamed!');
    });

    /*Third file*/

}).listen(8080);