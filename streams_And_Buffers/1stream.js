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

     const file = fs.readFileSync('./streams_And_Buffers/m3ww_thumb_fadeout.mp4');
    
    
     return res.end(file)

    
    console.log('request coming', req.url)
})


const PORT = process.env.PORT || 5700;

server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})