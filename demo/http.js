const http = require('http');
http.createServer((req, res) => {
    res.end('hello world');
}).listen(3009);
console.log('server is running at http://localhost:3009');
