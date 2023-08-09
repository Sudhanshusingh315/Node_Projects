const http = require('http');


const server = http.createServer((req,res)=>{

    if(req.url === '/')
    {
        res.end('Home page')
    }
    if(req.url === '/about')
    {

        
        res.end('About Page');
    }
    res.end('Error page');



})

server.listen(4000 , ()=>{
    console.log('server listening on part 4000...');
})