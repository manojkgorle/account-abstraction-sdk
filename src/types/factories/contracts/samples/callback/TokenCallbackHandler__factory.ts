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
import type { NonPayableOverrides } from "../../../../common";
import type {
  TokenCallbackHandler,
  TokenCallbackHandlerInterface,
} from "../../../../contracts/samples/callback/TokenCallbackHandler";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506106b6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100665760003560e01c8063150b7a0211610050578063150b7a02146100ae578063bc197c81146100f3578063f23a6e611461012e57600080fd5b806223de291461006b57806301ffc9a714610085575b600080fd5b6100836100793660046102ef565b5050505050505050565b005b6100986100933660046103ec565b610167565b6040516100a5919061041f565b60405180910390f35b6100e66100bc36600461042d565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040516100a591906104d9565b6100e6610101366004610532565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b6100e661013c3660046105ea565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a020000000000000000000000000000000000000000000000000000000014806101fa57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061024657507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b600073ffffffffffffffffffffffffffffffffffffffff8216610246565b6102738161024c565b811461027e57600080fd5b50565b80356102468161026a565b80610273565b80356102468161028c565b60008083601f8401126102b2576102b2600080fd5b50813567ffffffffffffffff8111156102cd576102cd600080fd5b6020830191508360018202830111156102e8576102e8600080fd5b9250929050565b60008060008060008060008060c0898b03121561030e5761030e600080fd5b600061031a8b8b610281565b985050602061032b8b828c01610281565b975050604061033c8b828c01610281565b965050606061034d8b828c01610292565b955050608089013567ffffffffffffffff81111561036d5761036d600080fd5b6103798b828c0161029d565b945094505060a089013567ffffffffffffffff81111561039b5761039b600080fd5b6103a78b828c0161029d565b92509250509295985092959890939650565b7fffffffff000000000000000000000000000000000000000000000000000000008116610273565b8035610246816103b9565b60006020828403121561040157610401600080fd5b600061040d84846103e1565b949350505050565b8015155b82525050565b602081016102468284610415565b60008060008060006080868803121561044857610448600080fd5b60006104548888610281565b955050602061046588828901610281565b945050604061047688828901610292565b935050606086013567ffffffffffffffff81111561049657610496600080fd5b6104a28882890161029d565b92509250509295509295909350565b7fffffffff000000000000000000000000000000000000000000000000000000008116610419565b6020810161024682846104b1565b60008083601f8401126104fc576104fc600080fd5b50813567ffffffffffffffff81111561051757610517600080fd5b6020830191508360208202830111156102e8576102e8600080fd5b60008060008060008060008060a0898b03121561055157610551600080fd5b600061055d8b8b610281565b985050602061056e8b828c01610281565b975050604089013567ffffffffffffffff81111561058e5761058e600080fd5b61059a8b828c016104e7565b9650965050606089013567ffffffffffffffff8111156105bc576105bc600080fd5b6105c88b828c016104e7565b9450945050608089013567ffffffffffffffff81111561039b5761039b600080fd5b60008060008060008060a0878903121561060657610606600080fd5b60006106128989610281565b965050602061062389828a01610281565b955050604061063489828a01610292565b945050606061064589828a01610292565b935050608087013567ffffffffffffffff81111561066557610665600080fd5b61067189828a0161029d565b9250925050929550929550929556fea2646970667358221220fbbf0de4891a6e6ad241eabc47c1ad99e3cc5989cbf73d567a3fe539652f7a5a64736f6c634300080f0033";

type TokenCallbackHandlerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenCallbackHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenCallbackHandler__factory extends ContractFactory {
  constructor(...args: TokenCallbackHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      TokenCallbackHandler & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): TokenCallbackHandler__factory {
    return super.connect(runner) as TokenCallbackHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenCallbackHandlerInterface {
    return new Interface(_abi) as TokenCallbackHandlerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TokenCallbackHandler {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as TokenCallbackHandler;
  }
}
