const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.url !== '/')
    {
        return res.end();
    }

    const file = fs.createReadStream('karekare.mp4');

    res.writeHead(200,{'Content-Type':'video/mp4'});

    file.pipe(res);

});

const PORT = process.env.PORT || 5000;

server.listen(PORT,()=>{
    console.log(`Listening on a port: ${PORT}`)
})