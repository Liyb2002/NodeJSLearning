const Web3 = require('web3');
const rpcURL = "https://rinkeby.infura.io/v3/686d75be8bf046229804af38cfab9505";
const web3 = new Web3(rpcURL);
const fs = require('fs');
var Tx     = require('ethereumjs-tx').Transaction

web3.eth.defaultAccount = '0x85E582C6379864990Fb76787a310d2fC7BE8D71f'
console.log(web3.eth.defaultAccount)

async function getBalance(){
Acount1balance = await web3.eth.getBalance("0xB6227EeC1109d05328d0eB2550107b7AD3ff4c84")
//console.log(Acount1balance)
}

getBalance()

async function getBlock(){
    Acount1balance = await web3.eth.getBlock(9222710)
 //   console.log(Acount1balance)
    console.log(typeof(Acount1balance))
    }

getBlock()