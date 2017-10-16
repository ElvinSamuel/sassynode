var http = require('http');
// var sass = require('node-sass');


http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(process.env.PORT, process.env.IP, function(){
    console.log(`SassyNode Server Up & Running On ${process.env.PORT}`);
})