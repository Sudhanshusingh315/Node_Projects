// Fs modules, also learning a differnt way of accessin methods in node/
// this is in Sync MODE

const {readFileSync, writeFileSync, read} = require('fs');

const first = readFileSync('./3-files_content/subfolder/myFavCats.txt','utf-8');
const second = readFileSync('./3-files_content/subfolder/favFood.txt','utf-8');
console.log(first, second);

// write file sync is going to write to a file and if a file is not there it's going to create one

writeFileSync('./3-files_content/subfolder/cat_info.txt',
`Hello this was created with node and i''m putting first file and second file as result ${first},${second}`
);

const cat_info = readFileSync('./3-files_content/subfolder/cat_info.txt','utf-8');
console.log(cat_info);