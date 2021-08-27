const EventEmitter = require('events');

class CustomEvent extends EventEmitter{

}

const ce = new CustomEvent();

ce.on('test1', () =>{
  console.log('this is a test1');
});

setInterval( () => {
  ce.emit('test1');},
  500
);