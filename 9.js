// Events emiiter - http module examples
const http = require('http');
// Using event emitter api
const server = http.createServer();

server.on('request',(req,res)=>{
    res.end('Welcome');
})

server.listen(5000);