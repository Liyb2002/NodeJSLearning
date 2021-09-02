const Web3 = require('web3');
const rpcURL = "https://mainnet.infura.io/v3/686d75be8bf046229804af38cfab9505";
const web3 = new Web3(rpcURL);

const account1 = '0xA006692006545b5EC7Fa7455A3dF5d13BfB07Fb8' // Your account address 1
const account2 = '0xD4394cb92A9F346468c9F9ee0d1EA3cd4764085B' // Your account address 2
const account3 = web3.eth.accounts.create();
//console.log(account3)
//console.log(web3.eth.accounts.hashMessage('heell'))
web3.eth.accounts.wallet.create(10)
console.log(web3.eth.accounts.wallet.add(account3))



//console.log(web3.eth.accounts.encrypt('0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318', 'test!') )
//web3.eth.sendTransaction({from: account1, to: account2, value: web3.toWei(0.01, "ether"), data: ""});