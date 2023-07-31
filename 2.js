// Path Module

const path  = require('path');

// seperator in node js
console.log(path.sep);

const absolute = path.resolve(__dirname,'2-files_content','meow.txt');
console.log(absolute);