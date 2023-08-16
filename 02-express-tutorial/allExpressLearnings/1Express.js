// basics of express
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    
    console.log('Hitting the resource');
    res.status(200).send('Home Page');

});

app.get('/about',(req,res)=>{

    res.status(200).send('About Page')
    
})

app.get('*',(req,res)=>{
    res.status(404).send('Page not found');
})


app.listen(5000,()=>{
    console.log('Server is listening on port 5000');
})