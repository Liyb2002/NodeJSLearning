const Web3 = require('web3');
const rpcURL = "https://rinkeby.infura.io/v3/686d75be8bf046229804af38cfab9505";
const web3 = new Web3(rpcURL);
const fs = require('fs');
var Tx     = require('ethereumjs-tx').Transaction

const http =require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode=200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body>');
  res.write('hoo');
  res.write('</body>');
  res.write('</html>');
  res.end('Hello World \n');
});

server.listen(port, hostname, () =>{
  console.log('server running at:// ${chalk.green (${hostname},${port})}');
});
