var http = require('http');
var fs = require('fs');
var mod = require('./oraliq');

http.createServer(function(req, res){
    fs.appendFile('asd.txt', mod.jonat, function(err, data){
        if(err) throw err;
    })
}).listen(1998);