// File with Async creation

const {readFile, writeFile} = require('fs');

readFile('./3-files_content/subfolder/myFavCats.txt','utf8',(err, resule)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    const first = resule;
    
})