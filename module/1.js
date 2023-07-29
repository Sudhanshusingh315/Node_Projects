// In this we will learn about modules, how modules work and how we can accquire them
// this is file where i want to require from 
const sayHi = require('./3');
const Name = require('./2');
require('./4.js');
sayHi(Name.jhon);
sayHi(Name.rohan);


