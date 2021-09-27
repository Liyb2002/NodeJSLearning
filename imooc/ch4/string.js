

const fs = require('fs');

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

