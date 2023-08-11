// Creating Https servers
const http = require('http');
const fs = require('fs');
// req and res are also streams

const server = http.createServer((req,res)=>{
    // code here 
    // ye esse req kar rhi hai but humko response karna hai
    if(req.url !== '/')
    {
        return res.end();
    }

 
    // Donwloading big fiels bad way
    
   /* const file = fs.readFileSync('sample.txt');
    
    
    return res.end(file); */


    // Downlaoding big files using good way(Streams)

    const readbleStream = fs.createReadStream('karekare.mp4');

    // readableStream ----> writeableStream 
    res.writeHead(200,{'Content-Type':'video/mp4'});
    readbleStream.pipe(res);

});


const PORT = process.env.PORT || 5000;

server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})