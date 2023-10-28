import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TokenCallbackHandler, TokenCallbackHandlerInterface } from "../TokenCallbackHandler";
type TokenCallbackHandlerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TokenCallbackHandler__factory extends ContractFactory {
    constructor(...args: TokenCallbackHandlerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TokenCallbackHandler>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TokenCallbackHandler;
    connect(signer: Signer): TokenCallbackHandler__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506105d1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100665760003560e01c8063150b7a0211610050578063150b7a02146100ad578063bc197c8114610116578063f23a6e611461015157600080fd5b806223de291461006b57806301ffc9a714610085575b600080fd5b6100836100793660046102e1565b5050505050505050565b005b61009861009336600461038c565b61018a565b60405190151581526020015b60405180910390f35b6100e56100bb3660046103d5565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100a4565b6100e5610124366004610489565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b6100e561015f366004610523565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a0200000000000000000000000000000000000000000000000000000000148061021d57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061026957507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461029357600080fd5b919050565b60008083601f8401126102aa57600080fd5b50813567ffffffffffffffff8111156102c257600080fd5b6020830191508360208285010111156102da57600080fd5b9250929050565b60008060008060008060008060c0898b0312156102fd57600080fd5b6103068961026f565b975061031460208a0161026f565b965061032260408a0161026f565b955060608901359450608089013567ffffffffffffffff8082111561034657600080fd5b6103528c838d01610298565b909650945060a08b013591508082111561036b57600080fd5b506103788b828c01610298565b999c989b5096995094979396929594505050565b60006020828403121561039e57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146103ce57600080fd5b9392505050565b6000806000806000608086880312156103ed57600080fd5b6103f68661026f565b94506104046020870161026f565b935060408601359250606086013567ffffffffffffffff81111561042757600080fd5b61043388828901610298565b969995985093965092949392505050565b60008083601f84011261045657600080fd5b50813567ffffffffffffffff81111561046e57600080fd5b6020830191508360208260051b85010111156102da57600080fd5b60008060008060008060008060a0898b0312156104a557600080fd5b6104ae8961026f565b97506104bc60208a0161026f565b9650604089013567ffffffffffffffff808211156104d957600080fd5b6104e58c838d01610444565b909850965060608b01359150808211156104fe57600080fd5b61050a8c838d01610444565b909650945060808b013591508082111561036b57600080fd5b60008060008060008060a0878903121561053c57600080fd5b6105458761026f565b95506105536020880161026f565b94506040870135935060608701359250608087013567ffffffffffffffff81111561057d57600080fd5b61058989828a01610298565b979a969950949750929593949250505056fea264697066735822122030acf64c41b7bf1b77d9c21072e6997dd7ea3417f79c52629ba33d09d9681dda64736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155BatchReceived";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC721Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "tokensReceived";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): TokenCallbackHandlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenCallbackHandler;
}
export {};
