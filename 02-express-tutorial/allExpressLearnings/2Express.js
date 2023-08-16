// Creating a server
// static assets

const express = require('express');
const app = express();
const path = require('path');

// static files and middlewares

app.use(express.static('./public'));

/* 

    app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'));
});


*/

app.all('*',(req,res)=>{
    res.status(404).send('Resource not found');
});

app.listen(5000,()=>{
    console.log('port is listening on 5000');
});