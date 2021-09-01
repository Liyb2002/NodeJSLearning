

const fs = require('fs');

var promise = new Promise(function(resolve, reject){

  //异步操作

  setTimeout(function(){

      console.log('执行完毕！');

      resolve('xxx');

  }, 500);

});

/*
fs.readFile('./OMGNetwork.txt', 'utf-8', (err, data) =>{
  if(err) {
    console.error(err)
    return
  }
  var networkName = data.search('Network Name: ')
  var tokenName = data.search('Token Name')

  console.log(data.slice(networkName+('Network Name: ').length, tokenName))
  console.log(data);
})

*/