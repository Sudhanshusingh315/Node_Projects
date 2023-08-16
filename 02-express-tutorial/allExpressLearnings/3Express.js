// API vs SSR

/*

api                       ssr

1) api - json            ssr - template
2) send - data           send template
3) res.json()            res.render()

*/ 

const express = require('express');
const app = express();
const {products} = require('../data');





app.get('/',(req,res)=>{
    res.json(products)
})



app.listen(5000,()=>{
    console.log('Server is listening on 5000');
});