

const fs = require('fs');
/*
fs.readFile('./event.js', 'utf8', (err, data) =>{
  if(err) throw err;
  console.log(data);
})
*/

const rs = fs.createReadStream('./fs.js');

rs.pipe(process.stdout);