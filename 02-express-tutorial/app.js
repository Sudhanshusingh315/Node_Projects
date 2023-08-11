const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('User hit the server');
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>Home Page</h1>');
    res.end(); // you always need to call res.end()
})


server.listen(5000);