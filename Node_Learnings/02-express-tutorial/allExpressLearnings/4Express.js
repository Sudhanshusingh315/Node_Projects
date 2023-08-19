// Building more meaning full api

/* route parameter, and query string parameters */
const express = require('express')
const app = express();


app.get('/',(req,res)=>{
    res.send('<h1> Home Page </h1><a href="/api/products">products</a') 
})

app.get('/api/products',(re1,res)=>{

})



app.listen(5000,()=>[
    console.log('server is on 5000')
])