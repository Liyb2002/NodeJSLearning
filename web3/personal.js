const Web3 = require('web3');
const rpcURL = "https://mainnet.infura.io/v3/686d75be8bf046229804af38cfab9505";
const web3 = new Web3(rpcURL);

var Personal = require('web3-eth-personal')
var personal = new Personal(rpcURL);

console.log(web3.shh.currentProvider)