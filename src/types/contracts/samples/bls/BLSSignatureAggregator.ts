/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export type UserOperationStruct = {
  sender: AddressLike;
  nonce: BigNumberish;
  initCode: BytesLike;
  callData: BytesLike;
  callGasLimit: BigNumberish;
  verificationGasLimit: BigNumberish;
  preVerificationGas: BigNumberish;
  maxFeePerGas: BigNumberish;
  maxPriorityFeePerGas: BigNumberish;
  paymasterAndData: BytesLike;
  signature: BytesLike;
};

export type UserOperationStructOutput = [
  sender: string,
  nonce: bigint,
  initCode: string,
  callData: string,
  callGasLimit: bigint,
  verificationGasLimit: bigint,
  preVerificationGas: bigint,
  maxFeePerGas: bigint,
  maxPriorityFeePerGas: bigint,
  paymasterAndData: string,
  signature: string
] & {
  sender: string;
  nonce: bigint;
  initCode: string;
  callData: string;
  callGasLimit: bigint;
  verificationGasLimit: bigint;
  preVerificationGas: bigint;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  paymasterAndData: string;
  signature: string;
};

export interface BLSSignatureAggregatorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BLS_DOMAIN"
      | "N"
      | "addStake"
      | "aggregateSignatures"
      | "getTrailingPublicKey"
      | "getUserOpHash"
      | "getUserOpPublicKey"
      | "userOpToMessage"
      | "validateSignatures"
      | "validateUserOpSignature"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BLS_DOMAIN",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "N", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addStake",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "aggregateSignatures",
    values: [UserOperationStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTrailingPublicKey",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserOpHash",
    values: [UserOperationStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserOpPublicKey",
    values: [UserOperationStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "userOpToMessage",
    values: [UserOperationStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "validateSignatures",
    values: [UserOperationStruct[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUserOpSignature",
    values: [UserOperationStruct]
  ): string;

  decodeFunctionResult(functionFragment: "BLS_DOMAIN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "N", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "aggregateSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTrailingPublicKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserOpHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserOpPublicKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userOpToMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateUserOpSignature",
    data: BytesLike
  ): Result;
}

export interface BLSSignatureAggregator extends BaseContract {
  connect(runner?: ContractRunner | null): BLSSignatureAggregator;
  waitForDeployment(): Promise<this>;

  interface: BLSSignatureAggregatorInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  BLS_DOMAIN: TypedContractMethod<[], [string], "view">;

  N: TypedContractMethod<[], [bigint], "view">;

  addStake: TypedContractMethod<
    [entryPoint: AddressLike, delay: BigNumberish],
    [void],
    "payable"
  >;

  aggregateSignatures: TypedContractMethod<
    [userOps: UserOperationStruct[]],
    [string],
    "view"
  >;

  getTrailingPublicKey: TypedContractMethod<
    [data: BytesLike],
    [[bigint, bigint, bigint, bigint]],
    "view"
  >;

  getUserOpHash: TypedContractMethod<
    [userOp: UserOperationStruct],
    [string],
    "view"
  >;

  getUserOpPublicKey: TypedContractMethod<
    [userOp: UserOperationStruct],
    [[bigint, bigint, bigint, bigint]],
    "view"
  >;

  userOpToMessage: TypedContractMethod<
    [userOp: UserOperationStruct],
    [[bigint, bigint]],
    "view"
  >;

  validateSignatures: TypedContractMethod<
    [userOps: UserOperationStruct[], signature: BytesLike],
    [void],
    "view"
  >;

  validateUserOpSignature: TypedContractMethod<
    [userOp: UserOperationStruct],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BLS_DOMAIN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "N"): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "addStake"
  ): TypedContractMethod<
    [entryPoint: AddressLike, delay: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "aggregateSignatures"
  ): TypedContractMethod<[userOps: UserOperationStruct[]], [string], "view">;
  getFunction(
    nameOrSignature: "getTrailingPublicKey"
  ): TypedContractMethod<
    [data: BytesLike],
    [[bigint, bigint, bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUserOpHash"
  ): TypedContractMethod<[userOp: UserOperationStruct], [string], "view">;
  getFunction(
    nameOrSignature: "getUserOpPublicKey"
  ): TypedContractMethod<
    [userOp: UserOperationStruct],
    [[bigint, bigint, bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "userOpToMessage"
  ): TypedContractMethod<
    [userOp: UserOperationStruct],
    [[bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "validateSignatures"
  ): TypedContractMethod<
    [userOps: UserOperationStruct[], signature: BytesLike],
    [void],
    "view"
  >;
  getFunction(
    nameOrSignature: "validateUserOpSignature"
  ): TypedContractMethod<[userOp: UserOperationStruct], [string], "view">;

  filters: {};
}
