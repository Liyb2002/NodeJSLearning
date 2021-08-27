

const fs = require('fs');

fs.readFile('./event.js', 'utf8', (err, data) =>{
  if(err) throw err;
  console.log(data);
})


const data2 = fs.readFileSync('./event.js', 'utf8');
console.log(data2);