// Emitter
const EventEmitter = require('events');

const customEmitter = new  EventEmitter();

// important emitters are on and emit

customEmitter.on('meow',(name,id)=>{
    console.log(`data recieved by ${name} and my id: ${id}`);

});


customEmitter.on('pur',()=>{
    console.log('data revieved by meow');
})


customEmitter.emit('meow','sudhanshu',22);
customEmitter.emit('pur');


