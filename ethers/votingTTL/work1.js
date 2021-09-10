ethers = require('ethers')
bytecode = ('608060405234801561001057600080fd5b5060405161041d38038061041d8339818101604052602081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b8382019150602082018581111561006957600080fd5b825186602082028301116401000000008211171561008657600080fd5b8083526020830192505050908051906020019060200280838360005b838110156100bd5780820151818401526020810190506100a2565b5050505090500160405250505080600190805190602001906100e09291906100e7565b5050610151565b828054828255906000526020600020908101928215610123579160200282015b82811115610122578251825591602001919060010190610107565b5b5090506101309190610134565b5090565b5b8082111561014d576000816000905550600101610135565b5090565b6102bd806101606000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632f265cf71461005c578063392e66781461009e5780637021939f146100e2578063b13c744b14610124578063cc9ab26714610166575b600080fd5b6100886004803603602081101561007257600080fd').toString()
abi = JSON.parse([
	{
		"inputs": [
			{
				"internalType": "bytes32[]",
				"name": "candidateNames",
				"type": "bytes32[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidateList",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "candidate",
				"type": "bytes32"
			}
		],
		"name": "totalVotesFor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "candidate",
				"type": "bytes32"
			}
		],
		"name": "validCandidate",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "candidate",
				"type": "bytes32"
			}
		],
		"name": "voteForCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "votesReceived",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]).toString())