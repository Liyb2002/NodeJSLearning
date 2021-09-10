
var ethers = require('ethers');
var provider = ethers.providers.getDefaultProvider('rinkeby');

var address  = '0x0aC5aDD3290BD264bE381bDB25A4b5D99Cb65bFd';

var abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"setValue","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var privateKey = 'b1d21835b13bfab48f27514beea9c673c75baa55d7e8115e2f7dd575dc188ec9';

var wallet = new ethers.Wallet(privateKey,provider);

var contract = new ethers.Contract(address,abi,wallet);


var sendPromise = contract.setValue('Hello World');

sendPromise.then(function(transaction){
  console.log(transaction);
});

var callPromise = contract.getValue();

callPromise.then(function(result){
  console.log(result);
});