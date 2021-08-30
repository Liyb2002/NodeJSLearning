var Tx     = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const web3 = new Web3("https://rinkeby.infura.io/v3/686d75be8bf046229804af38cfab9505")

const account1 = '0xA006692006545b5EC7Fa7455A3dF5d13BfB07Fb8' // Your account address 1
const account2 = '0xD4394cb92A9F346468c9F9ee0d1EA3cd4764085B' // Your account address 2

const privateKey1 = Buffer.from('b1d21835b13bfab48f27514beea9c673c75baa55d7e8115e2f7dd575dc188ec9', 'hex')
const privateKey2 = Buffer.from('ecd88a69abe3d273f010ecb0eb960f53a28bfcd903bfb98d270dfa090f913b34', 'hex')

web3.eth.getTransactionCount(account1, (err, txCount) => {
    // Build the transaction
    const txObject = {
      nonce:    web3.utils.toHex(txCount),
      to:       account2,
      value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
      gasLimit: web3.utils.toHex(21000),
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }
  
    // Sign the transaction
    const tx = new Tx(txObject, {chain:'rinkeby'})
    tx.sign(privateKey1)
  
    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')
  
    // Broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('txHash:', txHash)
      // Now go check etherscan to see the transaction!
    })
  })