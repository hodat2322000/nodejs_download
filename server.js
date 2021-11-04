const http = require('http');
const dt = require('./date')
const url = require('url')
var fs = require('fs');

http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');
    res.write("log");
    res.end()
}).listen(8080)