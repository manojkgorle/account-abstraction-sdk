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
  TestPaymasterAcceptAll,
  TestPaymasterAcceptAllInterface,
} from "../../../contracts/test/TestPaymasterAcceptAll";

const _abi = [
  {
    inputs: [
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
  "0x60a06040523480156200001157600080fd5b5060405162000fb538038062000fb58339810160408190526200003491620000fd565b80620000403362000066565b6001600160a01b03166080523233146200005f576200005f3262000066565b506200012a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006001600160a01b0382165b92915050565b6000620000c382620000b6565b620000e181620000c9565b8114620000ed57600080fd5b50565b8051620000c381620000d6565b600060208284031215620001145762000114600080fd5b6000620001228484620000f0565b949350505050565b608051610e3e6200017760003960008181610184015281816102a501528181610356015281816103df0152818161049e015281816105480152818161060001526107bb0152610e3e6000f3fe6080604052600436106100c75760003560e01c8063bb9fe6bf11610074578063d0e30db01161004e578063d0e30db01461020a578063f2fde38b14610212578063f465c77e1461023257600080fd5b8063bb9fe6bf146101b3578063c23a5cea146101c8578063c399ec88146101e857600080fd5b80638da5cb5b116100a55780638da5cb5b14610116578063a9a2340914610152578063b0d691fe1461017257600080fd5b80630396cb60146100cc578063205c2878146100e1578063715018a614610101575b600080fd5b6100df6100da366004610955565b610260565b005b3480156100ed57600080fd5b506100df6100fc3660046109c1565b610311565b34801561010d57600080fd5b506100df6103a7565b34801561012257600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff166040516101499190610a0d565b60405180910390f35b34801561015e57600080fd5b506100df61016d366004610a85565b6103bb565b34801561017e57600080fd5b506101a67f000000000000000000000000000000000000000000000000000000000000000081565b6040516101499190610b14565b3480156101bf57600080fd5b506100df6103d5565b3480156101d457600080fd5b506100df6101e3366004610b22565b610459565b3480156101f457600080fd5b506101fd610508565b6040516101499190610b49565b6100df6105c3565b34801561021e57600080fd5b506100df61022d366004610b22565b610650565b34801561023e57600080fd5b5061025261024d366004610b73565b6106ba565b604051610149929190610c59565b6102686106dd565b6040517f0396cb6000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690630396cb609034906102dc908590600401610c8c565b6000604051808303818588803b1580156102f557600080fd5b505af1158015610309573d6000803e3d6000fd5b505050505050565b6103196106dd565b6040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063205c28789061038d9085908590600401610c9a565b600060405180830381600087803b1580156102f557600080fd5b6103af6106dd565b6103b9600061072e565b565b6103c36107a3565b6103cf84848484610812565b50505050565b6103dd6106dd565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561044557600080fd5b505af11580156103cf573d6000803e3d6000fd5b6104616106dd565b6040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063c23a5cea906104d3908490600401610a0d565b600060405180830381600087803b1580156104ed57600080fd5b505af1158015610501573d6000803e3d6000fd5b5050505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a082319061057d903090600401610a0d565b602060405180830381865afa15801561059a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105be9190610cc0565b905090565b6040517fb760faf900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063b760faf9903490610637903090600401610a0d565b6000604051808303818588803b1580156104ed57600080fd5b6106586106dd565b73ffffffffffffffffffffffffffffffffffffffff81166106ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a590610ce1565b60405180910390fd5b6106b78161072e565b50565b606060006106c66107a3565b6106d1858585610844565b91509150935093915050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a590610d74565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146103b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a590610db6565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a590610df8565b6060600061085183610882565b8261303914610861576000610864565b60015b604080516020810190915260008152925060ff169050935093915050565b6106b7816040516024016108969190610b49565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ff82c50f1000000000000000000000000000000000000000000000000000000001790526106b78160006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b63ffffffff81165b81146106b757600080fd5b803561094f81610931565b92915050565b60006020828403121561096a5761096a600080fd5b60006109768484610944565b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff821661094f565b6109398161097e565b803561094f8161099c565b80610939565b803561094f816109b0565b600080604083850312156109d7576109d7600080fd5b60006109e385856109a5565b92505060206109f4858286016109b6565b9150509250929050565b610a078161097e565b82525050565b6020810161094f82846109fe565b600381106106b757600080fd5b803561094f81610a1b565b60008083601f840112610a4857610a48600080fd5b50813567ffffffffffffffff811115610a6357610a63600080fd5b602083019150836001820283011115610a7e57610a7e600080fd5b9250929050565b60008060008060608587031215610a9e57610a9e600080fd5b6000610aaa8787610a28565b945050602085013567ffffffffffffffff811115610aca57610aca600080fd5b610ad687828801610a33565b93509350506040610ae9878288016109b6565b91505092959194509250565b600061094f8261097e565b600061094f82610af5565b610a0781610b00565b6020810161094f8284610b0b565b600060208284031215610b3757610b37600080fd5b600061097684846109a5565b80610a07565b6020810161094f8284610b43565b60006101608284031215610b6d57610b6d600080fd5b50919050565b600080600060608486031215610b8b57610b8b600080fd5b833567ffffffffffffffff811115610ba557610ba5600080fd5b610bb186828701610b57565b9350506020610bc2868287016109b6565b9250506040610bd3868287016109b6565b9150509250925092565b60005b83811015610bf8578181015183820152602001610be0565b838111156103cf5750506000910152565b6000610c13825190565b808452602084019350610c2a818560208601610bdd565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920192915050565b60408082528101610c6a8185610c09565b9050610c796020830184610b43565b9392505050565b63ffffffff8116610a07565b6020810161094f8284610c80565b60408101610ca882856109fe565b610c796020830184610b43565b805161094f816109b0565b600060208284031215610cd557610cd5600080fd5b60006109768484610cb5565b6020808252810161094f81602681527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160208201527f6464726573730000000000000000000000000000000000000000000000000000604082015260600190565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657291019081525b60200190565b6020808252810161094f81610d42565b60158152602081017f53656e646572206e6f7420456e747279506f696e74000000000000000000000081529050610d6e565b6020808252810161094f81610d84565b600d8152602081017f6d757374206f766572726964650000000000000000000000000000000000000081529050610d6e565b6020808252810161094f81610dc656fea26469706673582212205b1e3325db16c88a0bf9080be915bdc53add4f415b9c1c9b128543f811d374fc64736f6c634300080f0033";

type TestPaymasterAcceptAllConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestPaymasterAcceptAllConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestPaymasterAcceptAll__factory extends ContractFactory {
  constructor(...args: TestPaymasterAcceptAllConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _entryPoint: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  override deploy(
    _entryPoint: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_entryPoint, overrides || {}) as Promise<
      TestPaymasterAcceptAll & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): TestPaymasterAcceptAll__factory {
    return super.connect(runner) as TestPaymasterAcceptAll__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestPaymasterAcceptAllInterface {
    return new Interface(_abi) as TestPaymasterAcceptAllInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TestPaymasterAcceptAll {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as TestPaymasterAcceptAll;
  }
}