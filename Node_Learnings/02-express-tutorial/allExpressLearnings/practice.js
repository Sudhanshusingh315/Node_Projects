const express = require('express');
const app = express();

app.use(express.static('./public'));

app.all('*',(req,res)=>{
    res.status(404).send("Resources are not found here");
})

app.listen(5000,()=>{
    console.log("server is running at 5000")
});