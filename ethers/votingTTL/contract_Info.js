
var ethers = require('ethers');
var provider = ethers.providers.getDefaultProvider('rinkeby');

var address  = '0x0aC5aDD3290BD264bE381bDB25A4b5D99Cb65bFd';

var abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"setValue","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var privateKey = 'b1d21835b13bfab48f27514beea9c673c75baa55d7e8115e2f7dd575dc188ec9';

var wallet = new ethers.Wallet(privateKey,provider);
//console.log(ethers.Wallet.publicKey)

var contract = new ethers.Contract(address,abi,wallet);
console.log(contract.address)

//console.log(contract.address)
//console.log(contract.signer)

async function getBalance(){
  var ba = await wallet.getBalance();
  console.log(ba)

}

//getBalance()