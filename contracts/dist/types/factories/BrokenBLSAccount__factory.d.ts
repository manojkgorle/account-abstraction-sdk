import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { BrokenBLSAccount, BrokenBLSAccountInterface } from "../BrokenBLSAccount";
type BrokenBLSAccountConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BrokenBLSAccount__factory extends ContractFactory {
    constructor(...args: BrokenBLSAccountConstructorParams);
    deploy(anEntryPoint: PromiseOrValue<string>, anAggregator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<BrokenBLSAccount>;
    getDeployTransaction(anEntryPoint: PromiseOrValue<string>, anAggregator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): BrokenBLSAccount;
    connect(signer: Signer): BrokenBLSAccount__factory;
    static readonly bytecode = "0x60e0604052306080523480156200001557600080fd5b50604051620025443803806200254483398101604081905262000038916200013f565b6001600160a01b03821660a052816200005062000064565b506001600160a01b031660c052506200017e565b600054610100900460ff1615620000d15760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116101562000124576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6001600160a01b03811681146200013c57600080fd5b50565b600080604083850312156200015357600080fd5b8251620001608162000126565b6020840151909250620001738162000126565b809150509250929050565b60805160a05160c051612342620002026000396000818161027d015261093c0152600081816103a40152818161097f01528181610a2601528181610e4a0152818161109b01528181611225015281816115770152611750015260008181610722015281816107d201528181610aea01528181610b9a0152610ce301526123426000f3fe60806040526004361061016d5760003560e01c806352d1902d116100cb578063c399ec881161007f578063e02afbae11610059578063e02afbae1461047a578063ee472f361461049c578063f23a6e61146104bc57600080fd5b8063c399ec8814610430578063c4d66de814610445578063d087d2881461046557600080fd5b8063b0d691fe116100b0578063b0d691fe14610395578063b61d27f6146103c8578063bc197c81146103e857600080fd5b806352d1902d1461034d5780638da5cb5b1461036257600080fd5b80633659cfe6116101225780634a58db19116101075780634a58db19146103125780634d44560d1461031a5780634f1ef2861461033a57600080fd5b80633659cfe6146102c45780633a871cdd146102e457600080fd5b8063150b7a0211610153578063150b7a02146101d557806318dfb3c71461024b578063245a7bfc1461026b57600080fd5b806223de291461017957806301ffc9a7146101a057600080fd5b3661017457005b600080fd5b34801561018557600080fd5b5061019e610194366004611b2f565b5050505050505050565b005b3480156101ac57600080fd5b506101c06101bb366004611be0565b610502565b60405190151581526020015b60405180910390f35b3480156101e157600080fd5b5061021a6101f0366004611c22565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016101cc565b34801561025757600080fd5b5061019e610266366004611cda565b6105e7565b34801561027757600080fd5b5061029f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101cc565b3480156102d057600080fd5b5061019e6102df366004611d46565b61070b565b3480156102f057600080fd5b506103046102ff366004611d63565b610910565b6040519081526020016101cc565b61019e61097d565b34801561032657600080fd5b5061019e610335366004611db7565b610a1c565b61019e610348366004611e61565b610ad3565b34801561035957600080fd5b50610304610cc9565b34801561036e57600080fd5b5060005461029f9062010000900473ffffffffffffffffffffffffffffffffffffffff1681565b3480156103a157600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061029f565b3480156103d457600080fd5b5061019e6103e3366004611f27565b610db5565b3480156103f457600080fd5b5061021a610403366004611f77565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561043c57600080fd5b50610304610e04565b34801561045157600080fd5b5061019e610460366004611d46565b610ebb565b34801561047157600080fd5b5061030461104e565b34801561048657600080fd5b5061048f6110ca565b6040516101cc9190612015565b3480156104a857600080fd5b5061019e6104b7366004612046565b6110df565b3480156104c857600080fd5b5061021a6104d73660046120c4565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a0200000000000000000000000000000000000000000000000000000000148061059557507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b806105e157507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b6105ef61120d565b82811461065d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b83811015610704576106f285858381811061067d5761067d612140565b90506020020160208101906106929190611d46565b60008585858181106106a6576106a6612140565b90506020028101906106b8919061216f565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506112d692505050565b806106fc816121d4565b915050610660565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630036107d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610654565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108457f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16146108e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610654565b6108f181611353565b6040805160008082526020820190925261090d9183919061135b565b50565b600061091a61155f565b506040805160608101825273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168082526000602083018190529190920152610976826115fe565b9392505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b158015610a0857600080fd5b505af1158015610704573d6000803e3d6000fd5b610a24611669565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b158015610ab757600080fd5b505af1158015610acb573d6000803e3d6000fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610b98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610654565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610c0d7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610cb0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610654565b610cb982611353565b610cc58282600161135b565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610d90576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610654565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610dbd61120d565b610dfe848484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506112d692505050565b50505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610e92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb69190612233565b905090565b600054610100900460ff1615808015610edb5750600054600160ff909116105b80610ef55750303b158015610ef5575060005460ff166001145b610f81576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610654565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610fdf57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610fe8826116fa565b8015610cc557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482018190529073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610e75565b6110d2611aa6565b6110da611aa6565b919050565b600054610100900460ff16158080156110ff5750600054600160ff909116105b806111195750303b158015611119575060005460ff166001145b6111a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610654565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055801561120357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610fe860006116fa565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148061126e575060005462010000900473ffffffffffffffffffffffffffffffffffffffff1633145b6112d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152606401610654565b565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516112ff9190612278565b60006040518083038185875af1925050503d806000811461133c576040519150601f19603f3d011682016040523d82523d6000602084013e611341565b606091505b50915091508161070457805160208201fd5b61090d611669565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156113935761138e83611799565b505050565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611418575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261141591810190612233565b60015b6114a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610654565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611553576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610654565b5061138e8383836118a3565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146112d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152606401610654565b801561090d5760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610704576040519150601f19603f3d011682016040523d82523d6000602084013e610704565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1633148061169457503330145b6112d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152606401610654565b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff8481168202929092178084556040519190048216927f0000000000000000000000000000000000000000000000000000000000000000909216917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de91a350565b73ffffffffffffffffffffffffffffffffffffffff81163b61183d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610654565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6118ac836118c8565b6000825111806118b95750805b1561138e57610dfe8383611915565b6118d181611799565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061097683836040518060600160405280602781526020016122e66027913960606000808573ffffffffffffffffffffffffffffffffffffffff168560405161195f9190612278565b600060405180830381855af49150503d806000811461199a576040519150601f19603f3d011682016040523d82523d6000602084013e61199f565b606091505b50915091506119b0868383876119ba565b9695505050505050565b60608315611a50578251600003611a495773ffffffffffffffffffffffffffffffffffffffff85163b611a49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610654565b5081611a5a565b611a5a8383611a62565b949350505050565b815115611a725781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106549190612294565b60405180608001604052806004906020820280368337509192915050565b73ffffffffffffffffffffffffffffffffffffffff8116811461090d57600080fd5b60008083601f840112611af857600080fd5b50813567ffffffffffffffff811115611b1057600080fd5b602083019150836020828501011115611b2857600080fd5b9250929050565b60008060008060008060008060c0898b031215611b4b57600080fd5b8835611b5681611ac4565b97506020890135611b6681611ac4565b96506040890135611b7681611ac4565b955060608901359450608089013567ffffffffffffffff80821115611b9a57600080fd5b611ba68c838d01611ae6565b909650945060a08b0135915080821115611bbf57600080fd5b50611bcc8b828c01611ae6565b999c989b5096995094979396929594505050565b600060208284031215611bf257600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461097657600080fd5b600080600080600060808688031215611c3a57600080fd5b8535611c4581611ac4565b94506020860135611c5581611ac4565b935060408601359250606086013567ffffffffffffffff811115611c7857600080fd5b611c8488828901611ae6565b969995985093965092949392505050565b60008083601f840112611ca757600080fd5b50813567ffffffffffffffff811115611cbf57600080fd5b6020830191508360208260051b8501011115611b2857600080fd5b60008060008060408587031215611cf057600080fd5b843567ffffffffffffffff80821115611d0857600080fd5b611d1488838901611c95565b90965094506020870135915080821115611d2d57600080fd5b50611d3a87828801611c95565b95989497509550505050565b600060208284031215611d5857600080fd5b813561097681611ac4565b600080600060608486031215611d7857600080fd5b833567ffffffffffffffff811115611d8f57600080fd5b84016101608187031215611da257600080fd5b95602085013595506040909401359392505050565b60008060408385031215611dca57600080fd5b8235611dd581611ac4565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611e5957611e59611de3565b604052919050565b60008060408385031215611e7457600080fd5b8235611e7f81611ac4565b915060208381013567ffffffffffffffff80821115611e9d57600080fd5b818601915086601f830112611eb157600080fd5b813581811115611ec357611ec3611de3565b611ef3847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611e12565b91508082528784828501011115611f0957600080fd5b80848401858401376000848284010152508093505050509250929050565b60008060008060608587031215611f3d57600080fd5b8435611f4881611ac4565b935060208501359250604085013567ffffffffffffffff811115611f6b57600080fd5b611d3a87828801611ae6565b60008060008060008060008060a0898b031215611f9357600080fd5b8835611f9e81611ac4565b97506020890135611fae81611ac4565b9650604089013567ffffffffffffffff80821115611fcb57600080fd5b611fd78c838d01611c95565b909850965060608b0135915080821115611ff057600080fd5b611ffc8c838d01611c95565b909650945060808b0135915080821115611bbf57600080fd5b60808101818360005b600481101561203d57815183526020928301929091019060010161201e565b50505092915050565b60006080828403121561205857600080fd5b82601f83011261206757600080fd5b6040516080810181811067ffffffffffffffff8211171561208a5761208a611de3565b60405280608084018581111561209f57600080fd5b845b818110156120b95780358352602092830192016120a1565b509195945050505050565b60008060008060008060a087890312156120dd57600080fd5b86356120e881611ac4565b955060208701356120f881611ac4565b94506040870135935060608701359250608087013567ffffffffffffffff81111561212257600080fd5b61212e89828a01611ae6565b979a9699509497509295939492505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126121a457600080fd5b83018035915067ffffffffffffffff8211156121bf57600080fd5b602001915036819003821315611b2857600080fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361222c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b60006020828403121561224557600080fd5b5051919050565b60005b8381101561226757818101518382015260200161224f565b83811115610dfe5750506000910152565b6000825161228a81846020870161224c565b9190910192915050565b60208152600082518060208401526122b381604085016020870161224c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201a293015a642c45bbac015e9c06168162e317c3fdc29a9fc336b746bdf2169a364736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "anEntryPoint";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "anAggregator";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "previousAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "AdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "beacon";
            readonly type: "address";
        }];
        readonly name: "BeaconUpgraded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256[4]";
            readonly name: "oldPublicKey";
            readonly type: "uint256[4]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[4]";
            readonly name: "newPublicKey";
            readonly type: "uint256[4]";
        }];
        readonly name: "PublicKeyChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract IEntryPoint";
            readonly name: "entryPoint";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "SimpleAccountInitialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "addDeposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "aggregator";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "entryPoint";
        readonly outputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "dest";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "func";
            readonly type: "bytes";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "dest";
            readonly type: "address[]";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "func";
            readonly type: "bytes[]";
        }];
        readonly name: "executeBatch";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBlsPublicKey";
        readonly outputs: readonly [{
            readonly internalType: "uint256[4]";
            readonly name: "";
            readonly type: "uint256[4]";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDeposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNonce";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "anOwner";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[4]";
            readonly name: "aPublicKey";
            readonly type: "uint256[4]";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "initCode";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "callGasLimit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "verificationGasLimit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "preVerificationGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxFeePerGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxPriorityFeePerGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "paymasterAndData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "signature";
                readonly type: "bytes";
            }];
            readonly internalType: "struct UserOperation";
            readonly name: "userOp";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "userOpHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "missingAccountFunds";
            readonly type: "uint256";
        }];
        readonly name: "validateUserOp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "validationData";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "withdrawAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdrawDepositTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): BrokenBLSAccountInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BrokenBLSAccount;
}
export {};
