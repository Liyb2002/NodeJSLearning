const Web3 = require('web3');
const rpcURL = "https://rinkeby.infura.io/v3/686d75be8bf046229804af38cfab9505";
const web3 = new Web3(rpcURL);
var Contract = require('web3-eth-contract');

var myContract = new web3.eth.Contract([
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "detail",
				"type": "string"
			}
		],
		"name": "addProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "chairman",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "proposalList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "detail",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "starter",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "voterAddr",
				"type": "address"
			},
			{
				"internalType": "uint16",
				"name": "thisweight",
				"type": "uint16"
			}
		],
		"name": "registerVote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "voterAddr",
				"type": "address"
			}
		],
		"name": "viewVoter",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
], '0x75b5Fa4d83462B6819D382fEbf94900D7308ac67')
console.log(web3.eth.Contract.transactionConfirmationBlocks    )
console.log(myContract.options.jsonInterface)