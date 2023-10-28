/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  ERC20,
  ERC20Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC20/ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200106938038062001069833981016040819052620000349162000197565b600362000042838262000316565b50600462000051828262000316565b505050620003e2565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681016001600160401b03811182821017156200009857620000986200005a565b6040525050565b6000620000ab60405190565b9050620000b9828262000070565b919050565b60006001600160401b03821115620000da57620000da6200005a565b601f19601f83011660200192915050565b60005b8381101562000108578181015183820152602001620000ee565b8381111562000118576000848401525b50505050565b6000620001356200012f84620000be565b6200009f565b905082815260208101848484011115620001525762000152600080fd5b6200015f848285620000eb565b509392505050565b600082601f8301126200017d576200017d600080fd5b81516200018f8482602086016200011e565b949350505050565b60008060408385031215620001af57620001af600080fd5b82516001600160401b03811115620001ca57620001ca600080fd5b620001d88582860162000167565b602085015190935090506001600160401b03811115620001fb57620001fb600080fd5b620002098582860162000167565b9150509250929050565b634e487b7160e01b600052602260045260246000fd5b6002810460018216806200023e57607f821691505b60208210810362000253576200025362000213565b50919050565b60006200026a620002678381565b90565b92915050565b6200027b8362000259565b81546008840282811b60001990911b908116901990911617825550505050565b6000620002aa81848462000270565b505050565b81811015620002ce57620002c56000826200029b565b600101620002af565b5050565b601f821115620002aa576000818152602090206020601f85010481016020851015620002fb5750805b6200030f6020601f860104830182620002af565b5050505050565b81516001600160401b038111156200033257620003326200005a565b6200033e825462000229565b6200034b828285620002d2565b506020601f8211600181146200038357600083156200036a5750848201515b600019600885021c19811660028502178555506200030f565b600084815260208120601f198516915b82811015620003b5578785015182556020948501946001909201910162000393565b5084821015620003d35783870151600019601f87166008021c191681555b50505050600202600101905550565b610c7780620003f26000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610190578063a9059cbb146101a3578063dd62ed3e146101b657600080fd5b8063395093511461013f57806370a082311461015257806395d89b411461018857600080fd5b806318160ddd116100b257806318160ddd1461010c57806323b872dd1461011d578063313ce5671461013057600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d66101fc565b6040516100e3919061075d565b60405180910390f35b6100ff6100fa3660046107c6565b61028e565b6040516100e3919061080d565b6002545b6040516100e39190610821565b6100ff61012b36600461082f565b6102a8565b60126040516100e39190610888565b6100ff61014d3660046107c6565b6102cc565b610110610160366004610896565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100d6610318565b6100ff61019e3660046107c6565b610327565b6100ff6101b13660046107c6565b6103ab565b6101106101c43660046108bf565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020b90610921565b80601f016020809104026020016040519081016040528092919081815260200182805461023790610921565b80156102845780601f1061025957610100808354040283529160200191610284565b820191906000526020600020905b81548152906001019060200180831161026757829003601f168201915b5050505050905090565b60003361029c8185856103b9565b60019150505b92915050565b6000336102b68582856104c8565b6102c185858561056f565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919061029c908290869061031390879061097c565b6103b9565b60606004805461020b90610921565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091908381101561039e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610395906109ee565b60405180910390fd5b6102c182868684036103b9565b60003361029c81858561056f565b73ffffffffffffffffffffffffffffffffffffffff8316610406576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039590610a56565b73ffffffffffffffffffffffffffffffffffffffff8216610453576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039590610abe565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104bb908590610821565b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610569578181101561055c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039590610ace565b61056984848484036103b9565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166105bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039590610b61565b73ffffffffffffffffffffffffffffffffffffffff8216610609576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039590610bc9565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610669576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039590610c31565b73ffffffffffffffffffffffffffffffffffffffff80851660008181526020819052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906106d4908690610821565b60405180910390a3610569565b60005b838110156106fc5781810151838201526020016106e4565b838111156105695750506000910152565b6000610717825190565b80845260208401935061072e8185602086016106e1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920192915050565b6020808252810161076e818461070d565b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82166102a2565b61079c81610775565b81146107a757600080fd5b50565b80356102a281610793565b8061079c565b80356102a2816107b5565b600080604083850312156107dc576107dc600080fd5b60006107e885856107aa565b92505060206107f9858286016107bb565b9150509250929050565b8015155b82525050565b602081016102a28284610803565b80610807565b602081016102a2828461081b565b60008060006060848603121561084757610847600080fd5b600061085386866107aa565b9350506020610864868287016107aa565b9250506040610875868287016107bb565b9150509250925092565b60ff8116610807565b602081016102a2828461087f565b6000602082840312156108ab576108ab600080fd5b60006108b784846107aa565b949350505050565b600080604083850312156108d5576108d5600080fd5b60006108e185856107aa565b92505060206107f9858286016107aa565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60028104600182168061093557607f821691505b602082108103610947576109476108f2565b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561098f5761098f61094d565b500190565b60258152602081017f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7781527f207a65726f000000000000000000000000000000000000000000000000000000602082015290505b60400190565b602080825281016102a281610994565b60248152602081017f45524332303a20617070726f76652066726f6d20746865207a65726f2061646481527f7265737300000000000000000000000000000000000000000000000000000000602082015290506109e8565b602080825281016102a2816109fe565b60228152602081017f45524332303a20617070726f766520746f20746865207a65726f20616464726581527f7373000000000000000000000000000000000000000000000000000000000000602082015290506109e8565b602080825281016102a281610a66565b602080825281016102a281601d81527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000602082015260400190565b60258152602081017f45524332303a207472616e736665722066726f6d20746865207a65726f20616481527f6472657373000000000000000000000000000000000000000000000000000000602082015290506109e8565b602080825281016102a281610b09565b60238152602081017f45524332303a207472616e7366657220746f20746865207a65726f206164647281527f6573730000000000000000000000000000000000000000000000000000000000602082015290506109e8565b602080825281016102a281610b71565b60268152602081017f45524332303a207472616e7366657220616d6f756e742065786365656473206281527f616c616e63650000000000000000000000000000000000000000000000000000602082015290506109e8565b602080825281016102a281610bd956fea2646970667358221220d3fd5d8e0a56ab698181006eb3d6d5ecc626fb2de61f9fbbec9f4b80f1910f3864736f6c634300080f0033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override deploy(
    name_: string,
    symbol_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<
      ERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC20__factory {
    return super.connect(runner) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC20 {
    return new Contract(address, _abi, runner) as unknown as ERC20;
  }
}