var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var mv = require('mv');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = './uploads/'+files.filetoupload.name;
            /*res.write(oldpath+' '+newpath);
            console.log(oldpath+' '+newpath);
            res.end();*/
            //8iv: i used mv() instead of rename() because of following error:
            //Error: EXDEV: cross-device link not permitted, rename 'C:\path...\Temp\upload_36b5dfcb2a6dada63560f6c8ee7c88b2' -> 'D:\...\uploads\Vue-Essentials-Cheat-Sheet.pdf'

            mv(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);