/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IOracle,
  IOracleInterface,
} from "../../../contracts/samples/IOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ethOutput",
        type: "uint256",
      },
    ],
    name: "getTokenValueOfEth",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenInput",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IOracleInterface {
    return new Interface(_abi) as IOracleInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IOracle {
    return new Contract(address, _abi, runner) as unknown as IOracle;
  }
}
