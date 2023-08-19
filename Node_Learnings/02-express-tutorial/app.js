const http = require('http');
const {readFileSync} = require('fs');

// get all the files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeJs = readFileSync('./navbar-app/browser-app.js');
const homelogo = readFileSync('./navbar-app/logo.svg');



const server = http.createServer((req,res)=>{
    console.log('User hit the server');
    console.log(req.url);
    // home page of the url  
    if(req.url === '/')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homePage);
        res.end(); // you always need to call res.end()

    }

    // styles  
    // styles  
    else if(req.url === '/styles.css')
    {
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homeStyles);
        res.end(); // you always need to call res.end()

    }
    // about the url 
    else if(req.url === '/about')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>About Page</h1>');
        res.end(); // you always need to call res.end()
    }
   
    else if(req.url === '/browser-app.js')
    {
        res.writeHead(200,{'content-type':'text/js'});
        res.write(homeJs);
        res.end(); // you always need to call res.end()
    }
    
    // 404 error code 
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>Page not found</h1>');
        res.end(); // you always need to call res.end()
    }
})


server.listen(5000);