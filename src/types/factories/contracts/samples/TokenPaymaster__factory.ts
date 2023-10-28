/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TokenPaymaster,
  TokenPaymasterInterface,
} from "../../../contracts/samples/TokenPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "accountFactory",
        type: "address",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "COST_OF_POST",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "theFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620026c4380380620026c48339810160408190526200003491620003f4565b8180826200004233620000a0565b6001600160a01b031660805260046200005c83826200055e565b5060056200006b82826200055e565b5050506001600160a01b03831660a05262000088306001620000f0565b62000097303360001962000197565b50505062000747565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038216620001225760405162461bcd60e51b815260040162000119906200062a565b60405180910390fd5b80600360008282546200013691906200067c565b90915550506001600160a01b038216600081815260016020526040808220805485019055517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906200018a90859062000697565b60405180910390a35b5050565b6001600160a01b038316620001c05760405162461bcd60e51b81526004016200011990620006e5565b6001600160a01b038216620001e95760405162461bcd60e51b8152600401620001199062000735565b6001600160a01b0380841660008181526002602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906200024690859062000697565b60405180910390a3505050565b505050565b60006001600160a01b0382165b92915050565b620002768162000258565b81146200028257600080fd5b50565b805162000265816200026b565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681016001600160401b0381118282101715620002d057620002d062000292565b6040525050565b6000620002e360405190565b9050620002f18282620002a8565b919050565b60006001600160401b0382111562000312576200031262000292565b601f19601f83011660200192915050565b60005b838110156200034057818101518382015260200162000326565b8381111562000350576000848401525b50505050565b60006200036d6200036784620002f6565b620002d7565b9050828152602081018484840111156200038a576200038a600080fd5b6200039784828562000323565b509392505050565b600082601f830112620003b557620003b5600080fd5b8151620003c784826020860162000356565b949350505050565b6000620002658262000258565b6200027681620003cf565b80516200026581620003dc565b6000806000606084860312156200040e576200040e600080fd5b60006200041c868662000285565b602086015190945090506001600160401b038111156200043f576200043f600080fd5b6200044d868287016200039f565b92505060406200046086828701620003e7565b9150509250925092565b634e487b7160e01b600052602260045260246000fd5b6002810460018216806200049557607f821691505b602082108103620004aa57620004aa6200046a565b50919050565b600062000265620004be8381565b90565b620004cc83620004b0565b81546008840282811b60001990911b908116901990911617825550505050565b600062000253818484620004c1565b81811015620001935762000511600082620004ec565b600101620004fb565b601f82111562000253576000818152602090206020601f85010481016020851015620005435750805b620005576020601f860104830182620004fb565b5050505050565b81516001600160401b038111156200057a576200057a62000292565b62000586825462000480565b620005938282856200051a565b506020601f821160018114620005cb5760008315620005b25750848201515b600019600885021c198116600285021785555062000557565b600084815260208120601f198516915b82811015620005fd5787850151825560209485019460019092019101620005db565b50848210156200061b5783870151600019601f87166008021c191681555b50505050600202600101905550565b602080825281016200026581601f81527f45524332303a206d696e7420746f20746865207a65726f206164647265737300602082015260400190565b634e487b7160e01b600052601160045260246000fd5b6000821982111562000692576200069262000666565b500190565b8181526020810162000265565b60248152602081017f45524332303a20617070726f76652066726f6d20746865207a65726f206164648152637265737360e01b602082015290505b60400190565b602080825281016200026581620006a4565b60228152602081017f45524332303a20617070726f766520746f20746865207a65726f206164647265815261737360f01b60208201529050620006df565b602080825281016200026581620006f7565b60805160a051611f1f620007a560003960008181610376015261130501526000818161040a01528181610591015281816106ee0152818161089501528181610954015281816109fe01528181610ab60152610fa80152611f1f6000f3fe6080604052600436106101a15760003560e01c80639f5ca221116100e1578063c23a5cea1161008a578063dd62ed3e11610064578063dd62ed3e1461048b578063f0dda65c146104de578063f2fde38b146104fe578063f465c77e1461051e57600080fd5b8063c23a5cea1461044e578063c399ec881461046e578063d0e30db01461048357600080fd5b8063a9a23409116100bb578063a9a23409146103d8578063b0d691fe146103f8578063bb9fe6bf1461043957600080fd5b80639f5ca22114610364578063a457c2d714610398578063a9059cbb146103b857600080fd5b8063313ce5671161014e578063715018a611610128578063715018a6146102f0578063796d4371146103055780638da5cb5b1461031b57806395d89b411461034f57600080fd5b8063313ce56714610271578063395093511461028d57806370a08231146102ad57600080fd5b806318160ddd1161017f57806318160ddd14610213578063205c28781461023157806323b872dd1461025157600080fd5b80630396cb60146101a657806306fdde03146101bb578063095ea7b3146101e6575b600080fd5b6101b96101b436600461137b565b61054c565b005b3480156101c757600080fd5b506101d06105fd565b6040516101dd9190611420565b60405180910390f35b3480156101f257600080fd5b50610206610201366004611474565b61068f565b6040516101dd91906114bb565b34801561021f57600080fd5b506003545b6040516101dd91906114cf565b34801561023d57600080fd5b506101b961024c366004611474565b6106a9565b34801561025d57600080fd5b5061020661026c3660046114dd565b61073f565b34801561027d57600080fd5b5060126040516101dd9190611536565b34801561029957600080fd5b506102066102a8366004611474565b610765565b3480156102b957600080fd5b506102246102c8366004611544565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b3480156102fc57600080fd5b506101b96107b1565b34801561031157600080fd5b50610224613a9881565b34801561032757600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff165b6040516101dd919061156e565b34801561035b57600080fd5b506101d06107c5565b34801561037057600080fd5b506103427f000000000000000000000000000000000000000000000000000000000000000081565b3480156103a457600080fd5b506102066103b3366004611474565b6107d4565b3480156103c457600080fd5b506102066103d3366004611474565b610863565b3480156103e457600080fd5b506101b96103f33660046115e6565b610871565b34801561040457600080fd5b5061042c7f000000000000000000000000000000000000000000000000000000000000000081565b6040516101dd9190611675565b34801561044557600080fd5b506101b961088b565b34801561045a57600080fd5b506101b9610469366004611544565b61090f565b34801561047a57600080fd5b506102246109be565b6101b9610a79565b34801561049757600080fd5b506102246104a6366004611683565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020908152604080832093909416825291909152205490565b3480156104ea57600080fd5b506101b96104f9366004611474565b610b06565b34801561050a57600080fd5b506101b9610519366004611544565b610b1c565b34801561052a57600080fd5b5061053e6105393660046116d2565b610b85565b6040516101dd929190611721565b610554610ba8565b6040517f0396cb6000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690630396cb609034906105c890859060040161174d565b6000604051808303818588803b1580156105e157600080fd5b505af11580156105f5573d6000803e3d6000fd5b505050505050565b60606004805461060c9061178a565b80601f01602080910402602001604051908101604052809291908181526020018280546106389061178a565b80156106855780601f1061065a57610100808354040283529160200191610685565b820191906000526020600020905b81548152906001019060200180831161066857829003601f168201915b5050505050905090565b60003361069d818585610bf9565b60019150505b92915050565b6106b1610ba8565b6040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063205c28789061072590859085906004016117b0565b600060405180830381600087803b1580156105e157600080fd5b60003361074d858285610d08565b610758858585610da9565b60019150505b9392505050565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919061069d90829086906107ac9087906117fa565b610bf9565b6107b9610ba8565b6107c36000610f1b565b565b60606005805461060c9061178a565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091908381101561084b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108429061186c565b60405180910390fd5b6108588286868403610bf9565b506001949350505050565b60003361069d818585610da9565b610879610f90565b61088584848484610fff565b50505050565b610893610ba8565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156108fb57600080fd5b505af1158015610885573d6000803e3d6000fd5b610917610ba8565b6040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063c23a5cea9061098990849060040161156e565b600060405180830381600087803b1580156109a357600080fd5b505af11580156109b7573d6000803e3d6000fd5b5050505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a0823190610a3390309060040161156e565b602060405180830381865afa158015610a50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a749190611887565b905090565b6040517fb760faf900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063b760faf9903490610aed90309060040161156e565b6000604051808303818588803b1580156109a357600080fd5b610b0e610ba8565b610b188282611032565b5050565b610b24610ba8565b610b4e30610b4760005473ffffffffffffffffffffffffffffffffffffffff1690565b6000610bf9565b610b57816110fc565b610b8230827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610bf9565b50565b60606000610b91610f90565b610b9c85858561115a565b91509150935093915050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107c3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610842906118da565b73ffffffffffffffffffffffffffffffffffffffff8316610c46576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084290611942565b73ffffffffffffffffffffffffffffffffffffffff8216610c93576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610842906119aa565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526002602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610cfb9085906114cf565b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600260209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108855781811015610d9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610842906119ec565b6108858484848403610bf9565b73ffffffffffffffffffffffffffffffffffffffff8316610df6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084290611a54565b73ffffffffffffffffffffffffffffffffffffffff8216610e43576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084290611abc565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604090205481811015610ea3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084290611b24565b73ffffffffffffffffffffffffffffffffffffffff80851660008181526001602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610f0e9086906114cf565b60405180910390a3610885565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146107c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084290611b66565b600061100d83850185611544565b90506000611025611020613a98856117fa565b6112b5565b90506105f5823083610da9565b73ffffffffffffffffffffffffffffffffffffffff821661107f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084290611ba8565b806003600082825461109191906117fa565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600081815260016020526040808220805485019055517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906110f09085906114cf565b60405180910390a35050565b611104610ba8565b73ffffffffffffffffffffffffffffffffffffffff8116611151576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084290611c10565b610b8281610f1b565b6060600080611168846112b5565b9050613a988660a00135116111a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084290611c78565b6111b66040870187611c88565b159050611214576111c6866112c2565b806111d76102c86020890189611544565b101561120f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084290611d53565b61125d565b806112256102c86020890189611544565b101561125d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084290611d95565b61126a6020870187611544565b60405160200161127a919061156e565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190529660009650945050505050565b60006106a3606483611dd4565b60006112d16040830183611c88565b6112e091601491600091611de8565b6112e991611e18565b60601c905073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168114610b18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084290611ed9565b63ffffffff81165b8114610b8257600080fd5b80356106a38161135d565b60006020828403121561139057611390600080fd5b600061139c8484611370565b949350505050565b60005b838110156113bf5781810151838201526020016113a7565b838111156108855750506000910152565b60006113da825190565b8084526020840193506113f18185602086016113a4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920192915050565b6020808252810161075e81846113d0565b600073ffffffffffffffffffffffffffffffffffffffff82166106a3565b61136581611431565b80356106a38161144f565b80611365565b80356106a381611463565b6000806040838503121561148a5761148a600080fd5b60006114968585611458565b92505060206114a785828601611469565b9150509250929050565b8015155b82525050565b602081016106a382846114b1565b806114b5565b602081016106a382846114c9565b6000806000606084860312156114f5576114f5600080fd5b60006115018686611458565b935050602061151286828701611458565b925050604061152386828701611469565b9150509250925092565b60ff81166114b5565b602081016106a3828461152d565b60006020828403121561155957611559600080fd5b600061139c8484611458565b6114b581611431565b602081016106a38284611565565b60038110610b8257600080fd5b80356106a38161157c565b60008083601f8401126115a9576115a9600080fd5b50813567ffffffffffffffff8111156115c4576115c4600080fd5b6020830191508360018202830111156115df576115df600080fd5b9250929050565b600080600080606085870312156115ff576115ff600080fd5b600061160b8787611589565b945050602085013567ffffffffffffffff81111561162b5761162b600080fd5b61163787828801611594565b9350935050604061164a87828801611469565b91505092959194509250565b60006106a382611431565b60006106a382611656565b6114b581611661565b602081016106a3828461166c565b6000806040838503121561169957611699600080fd5b60006116a58585611458565b92505060206114a785828601611458565b600061016082840312156116cc576116cc600080fd5b50919050565b6000806000606084860312156116ea576116ea600080fd5b833567ffffffffffffffff81111561170457611704600080fd5b611710868287016116b6565b935050602061151286828701611469565b6040808252810161173281856113d0565b905061075e60208301846114c9565b63ffffffff81166114b5565b602081016106a38284611741565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60028104600182168061179e57607f821691505b6020821081036116cc576116cc61175b565b604081016117be8285611565565b61075e60208301846114c9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561180d5761180d6117cb565b500190565b60258152602081017f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7781527f207a65726f000000000000000000000000000000000000000000000000000000602082015290505b60400190565b602080825281016106a381611812565b80516106a381611463565b60006020828403121561189c5761189c600080fd5b600061139c848461187c565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657291019081525b60200190565b602080825281016106a3816118a8565b60248152602081017f45524332303a20617070726f76652066726f6d20746865207a65726f2061646481527f726573730000000000000000000000000000000000000000000000000000000060208201529050611866565b602080825281016106a3816118ea565b60228152602081017f45524332303a20617070726f766520746f20746865207a65726f20616464726581527f737300000000000000000000000000000000000000000000000000000000000060208201529050611866565b602080825281016106a381611952565b601d8152602081017f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000815290506118d4565b602080825281016106a3816119ba565b60258152602081017f45524332303a207472616e736665722066726f6d20746865207a65726f20616481527f647265737300000000000000000000000000000000000000000000000000000060208201529050611866565b602080825281016106a3816119fc565b60238152602081017f45524332303a207472616e7366657220746f20746865207a65726f206164647281527f657373000000000000000000000000000000000000000000000000000000000060208201529050611866565b602080825281016106a381611a64565b60268152602081017f45524332303a207472616e7366657220616d6f756e742065786365656473206281527f616c616e6365000000000000000000000000000000000000000000000000000060208201529050611866565b602080825281016106a381611acc565b60158152602081017f53656e646572206e6f7420456e747279506f696e740000000000000000000000815290506118d4565b602080825281016106a381611b34565b601f8152602081017f45524332303a206d696e7420746f20746865207a65726f206164647265737300815290506118d4565b602080825281016106a381611b76565b60268152602081017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181527f646472657373000000000000000000000000000000000000000000000000000060208201529050611866565b602080825281016106a381611bb8565b60268152602081017f546f6b656e5061796d61737465723a2067617320746f6f206c6f7720666f722081527f706f73744f70000000000000000000000000000000000000000000000000000060208201529050611866565b602080825281016106a381611c20565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe136859003018112611cc157611cc1600080fd5b8301915050803567ffffffffffffffff811115611ce057611ce0600080fd5b6020820191506001810236038213156115df576115df600080fd5b60278152602081017f546f6b656e5061796d61737465723a206e6f2062616c616e636520287072652d81527f637265617465290000000000000000000000000000000000000000000000000060208201529050611866565b602080825281016106a381611cfb565b601a8152602081017f546f6b656e5061796d61737465723a206e6f2062616c616e6365000000000000815290506118d4565b602080825281016106a381611d63565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082611de357611de3611da5565b500490565b60008085851115611dfb57611dfb600080fd5b83861115611e0b57611e0b600080fd5b5050820193919092039150565b80357fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016826014811015611e7a57611e757fffffffffffffffffffffffffffffffffffffffff000000000000000000000000826014036008021b90565b821691505b5092915050565b60258152602081017f546f6b656e5061796d61737465723a2077726f6e67206163636f756e7420666181527f63746f727900000000000000000000000000000000000000000000000000000060208201529050611866565b602080825281016106a381611e8156fea26469706673582212205d6cab233571b503115644cea27a7a25797fd65f18ab2d94251b28ce9d75274364736f6c634300080f0033";

type TokenPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenPaymaster__factory extends ContractFactory {
  constructor(...args: TokenPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    accountFactory: AddressLike,
    _symbol: string,
    _entryPoint: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      accountFactory,
      _symbol,
      _entryPoint,
      overrides || {}
    );
  }
  override deploy(
    accountFactory: AddressLike,
    _symbol: string,
    _entryPoint: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      accountFactory,
      _symbol,
      _entryPoint,
      overrides || {}
    ) as Promise<
      TokenPaymaster & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TokenPaymaster__factory {
    return super.connect(runner) as TokenPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenPaymasterInterface {
    return new Interface(_abi) as TokenPaymasterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TokenPaymaster {
    return new Contract(address, _abi, runner) as unknown as TokenPaymaster;
  }
}
