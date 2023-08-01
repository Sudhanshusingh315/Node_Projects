// File with Async creation

const {readFile, writeFile} = require('fs');
const { setMaxIdleHTTPParsers } = require('http');



readFile('./3-files_content/subfolder/myFavCats.txt','utf8',(err, result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    const first = result;
    
    readFile('./3-files_content/subfolder/favFood.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        const second = result;
        
    });

   

}); 