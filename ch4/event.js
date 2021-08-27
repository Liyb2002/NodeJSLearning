const EventEmitter = require('events');

class CustomEvent extends EventEmitter{

}

const ce = new CustomEvent();

ce.on('test1', () =>{
  console.log('this is a test1');
});

ce.on('error', err =>{
  console.log(err);
}
)

setInterval( () => {
  ce.emit('test1');},
  500
);

ce.emit('error', new Error('oops!'), Date.now());

function fn2(){
  console.log('fn2');
}

ce.on('test3', fn2);
