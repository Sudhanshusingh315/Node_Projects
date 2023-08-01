// https

const http = require('http');

// req is for request
// res is for response
const server = http.createServer((req,res)=>{
    if (req.url === '/')
    {
        res.end("Hello welcome to this server");
    }
    if(req.url === '/about')
    {
        res.end("This is my about");
    }
    res.end(`
    
    <h1>Oops!!</h1>
    <p>Can't seem to find the page</p>
    <a href="/">Go back to the home page</a>
    
    `)
})


server.listen(5000);