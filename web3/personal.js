const Web3 = require('web3');
const rpcURL = "https://rinkeby.infura.io/v3/686d75be8bf046229804af38cfab9505";
const web3 = new Web3(rpcURL);
const fs = require('fs');
var Tx     = require('ethereumjs-tx').Transaction


var Personal = require('web3-eth-personal')
var personal = new Personal(rpcURL);
const password = '12345'
web3.eth.personal.newAccount(password, function (){
    console.log("created account")
})

async function getCurrentAccount() {
    const accounts = await web3.eth.getAccounts();
    console.log( accounts[0])
    return accounts[0];
}
getCurrentAccount()