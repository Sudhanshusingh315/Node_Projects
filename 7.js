const { log } = require('console');
const { getRandomValues } = require('crypto');
const {readFile} = require('fs');

const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path,'utf-8',(err,data)=>{
            if(err)
            {
                reject(err);
            }
            else{
                
                resolve(data);
            } 
            
        })
    })
}



const start = async()=>{
    const first = await getText('./3-files_content/subfolder/cat_info.txt');
    console.log(first);
}   

start();



// getText('./3-files_content/subfolder/cat_info.txt').then(result =>{
//     console.log(result)
// }).catch((err)=>{console.log(err)})




  