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
} from "../../../../common";

export interface BLSOpenInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "hashToPoint"
      | "isZeroBLSKey"
      | "verifyMultiple"
      | "verifySingle"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "hashToPoint",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isZeroBLSKey",
    values: [[BigNumberish, BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyMultiple",
    values: [
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish][],
      [BigNumberish, BigNumberish][]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifySingle",
    values: [
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "hashToPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isZeroBLSKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyMultiple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifySingle",
    data: BytesLike
  ): Result;
}

export interface BLSOpen extends BaseContract {
  connect(runner?: ContractRunner | null): BLSOpen;
  waitForDeployment(): Promise<this>;

  interface: BLSOpenInterface;

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

  hashToPoint: TypedContractMethod<
    [domain: BytesLike, message: BytesLike],
    [[bigint, bigint]],
    "view"
  >;

  isZeroBLSKey: TypedContractMethod<
    [blsKey: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]],
    [boolean],
    "view"
  >;

  verifyMultiple: TypedContractMethod<
    [
      signature: [BigNumberish, BigNumberish],
      pubkeys: [BigNumberish, BigNumberish, BigNumberish, BigNumberish][],
      messages: [BigNumberish, BigNumberish][]
    ],
    [boolean],
    "view"
  >;

  verifySingle: TypedContractMethod<
    [
      signature: [BigNumberish, BigNumberish],
      pubkey: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      message: [BigNumberish, BigNumberish]
    ],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "hashToPoint"
  ): TypedContractMethod<
    [domain: BytesLike, message: BytesLike],
    [[bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "isZeroBLSKey"
  ): TypedContractMethod<
    [blsKey: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "verifyMultiple"
  ): TypedContractMethod<
    [
      signature: [BigNumberish, BigNumberish],
      pubkeys: [BigNumberish, BigNumberish, BigNumberish, BigNumberish][],
      messages: [BigNumberish, BigNumberish][]
    ],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "verifySingle"
  ): TypedContractMethod<
    [
      signature: [BigNumberish, BigNumberish],
      pubkey: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      message: [BigNumberish, BigNumberish]
    ],
    [boolean],
    "view"
  >;

  filters: {};
}