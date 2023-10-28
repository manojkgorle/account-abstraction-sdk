"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SimpleAccount__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "anEntryPoint",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
            },
        ],
        name: "AdminChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
            },
        ],
        name: "BeaconUpgraded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8"
            },
        ],
        name: "Initialized",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract IEntryPoint",
                name: "entryPoint",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
        ],
        name: "SimpleAccountInitialized",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
            },
        ],
        name: "Upgraded",
        type: "event"
    },
    {
        inputs: [],
        name: "addDeposit",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [],
        name: "entryPoint",
        outputs: [
            {
                internalType: "contract IEntryPoint",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "dest",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "func",
                type: "bytes"
            },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "dest",
                type: "address[]"
            },
            {
                internalType: "bytes[]",
                name: "func",
                type: "bytes[]"
            },
        ],
        name: "executeBatch",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "getDeposit",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "anOwner",
                type: "address"
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4"
            },
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            },
        ],
        name: "onERC1155Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4"
            },
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            },
        ],
        name: "onERC721Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4"
            },
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4"
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            },
        ],
        name: "tokensReceived",
        outputs: [],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address"
            },
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            },
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    },
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple"
            },
            {
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "missingAccountFunds",
                type: "uint256"
            },
        ],
        name: "validateUserOp",
        outputs: [
            {
                internalType: "uint256",
                name: "validationData",
                type: "uint256"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "withdrawDepositTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        stateMutability: "payable",
        type: "receive"
    },
];
var _bytecode = "0x60c0346200016857601f6200229938819003918201601f19168301916001600160401b038311848410176200016d578084926020946040528339810103126200016857516001600160a01b038116810362000168573060805260a05260005460ff8160081c16620001135760ff80821610620000d7575b60405161211590816200018482396080518181816105e301528181610c290152610e06015260a051818181610802015281816108fb015281816109e401528181610f7d01528181611174015281816113c001528181611c040152611c630152f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a13862000076565b60405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c806223de291461018257806301ffc9a714610179578063150b7a021461017057806318dfb3c7146101675780633659cfe61461015e5780633a871cdd146101555780634a58db191461014c5780634d44560d146101435780634f1ef2861461013a57806352d1902d146101315780638da5cb5b14610128578063b0d691fe1461011f578063b61d27f614610116578063bc197c811461010d578063c399ec8814610104578063c4d66de8146100fb578063d087d288146100f25763f23a6e610361000e576100ed61142e565b61000e565b506100ed61133d565b506100ed6111d9565b506100ed6110fa565b506100ed611032565b506100ed610fa1565b506100ed610f31565b506100ed610edb565b506100ed610dbf565b506100ed610ba7565b506100ed610985565b506100ed6108b8565b506100ed61079a565b506100ed61058e565b506100ed61041c565b506100ed610359565b506100ed610268565b506100ed6101dc565b73ffffffffffffffffffffffffffffffffffffffff8116036101a957565b600080fd5b9181601f840112156101a95782359167ffffffffffffffff83116101a957602083818601950101116101a957565b50346101a95760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a95761021760043561018b565b61022260243561018b565b61022d60443561018b565b67ffffffffffffffff6084358181116101a95761024e9036906004016101ae565b505060a4359081116101a9576100199036906004016101ae565b50346101a95760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a9576004357fffffffff0000000000000000000000000000000000000000000000000000000081168091036101a957807f150b7a02000000000000000000000000000000000000000000000000000000006020921490811561032f575b8115610305575b506040519015158152f35b7f01ffc9a700000000000000000000000000000000000000000000000000000000915014386102fa565b7f4e2312e000000000000000000000000000000000000000000000000000000000811491506102f3565b50346101a95760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a95761039460043561018b565b61039f60243561018b565b60643567ffffffffffffffff81116101a9576103bf9036906004016101ae565b505060206040517f150b7a02000000000000000000000000000000000000000000000000000000008152f35b9181601f840112156101a95782359167ffffffffffffffff83116101a9576020808501948460051b0101116101a957565b50346101a95760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a95767ffffffffffffffff600480358281116101a95761046d90369083016103eb565b60249291929384359081116101a95761048990369084016103eb565b610491611c4b565b8083036105315760005b8381106104a457005b6104d56104ba6104b583878a611a71565b611a8f565b6104cf6104c8848688611aea565b3691610b70565b9061202c565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146105045760010161049b565b866011867f4e487b7100000000000000000000000000000000000000000000000000000000600052526000fd5b6064846013886020604051937f08c379a00000000000000000000000000000000000000000000000000000000085528401528201527f77726f6e67206172726179206c656e67746873000000000000000000000000006044820152fd5b50346101a95760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a9576004356105ca8161018b565b73ffffffffffffffffffffffffffffffffffffffff90817f00000000000000000000000000000000000000000000000000000000000000001691610610833014156114c0565b61063f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc93828554161461154b565b61064761204c565b6040519061065482610aae565b600082527f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561068e575050610019915061167d565b6020600491604094939451928380927f52d1902d00000000000000000000000000000000000000000000000000000000825286165afa6000918161076a575b50610757576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608490fd5b6100199361076591146115f2565b611769565b61078c91925060203d8111610793575b6107848183610ae6565b8101906115d6565b90386106cd565b503d61077a565b50346101a9577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6060813601126101a9576004359067ffffffffffffffff82116101a9576101609082360301126101a95773ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016330361085a5761083b6108569160243590600401611d04565b610846604435611a07565b6040519081529081906020820190565b0390f35b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152fd5b506000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126109825773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001681813b1561098257602491604051928380927fb760faf900000000000000000000000000000000000000000000000000000000825230600483015234905af18015610975575b610969575080f35b61097290610a8d565b80f35b61097d6115e5565b610961565b80fd5b50346101a957600060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610982576004356109c38161018b565b6109cb61204c565b8173ffffffffffffffffffffffffffffffffffffffff807f00000000000000000000000000000000000000000000000000000000000000001692833b15610a59576044908360405195869485937f205c287800000000000000000000000000000000000000000000000000000000855216600484015260243560248401525af1801561097557610969575080f35b8280fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff8111610aa157604052565b610aa9610a5d565b604052565b6020810190811067ffffffffffffffff821117610aa157604052565b6060810190811067ffffffffffffffff821117610aa157604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610aa157604052565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f60209267ffffffffffffffff8111610b63575b01160190565b610b6b610a5d565b610b5d565b929192610b7c82610b27565b91610b8a6040519384610ae6565b8294818452818301116101a9578281602093846000960137010152565b5060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a957600435610bde8161018b565b60243567ffffffffffffffff81116101a957366023820112156101a957610c0f903690602481600401359101610b70565b9073ffffffffffffffffffffffffffffffffffffffff91827f00000000000000000000000000000000000000000000000000000000000000001692610c56843014156114c0565b610c857f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc94828654161461154b565b610c8d61204c565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610cc3575050610019915061167d565b6020600491604094939451928380927f52d1902d00000000000000000000000000000000000000000000000000000000825286165afa60009181610d9f575b50610d8c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608490fd5b61001993610d9a91146115f2565b611848565b610db891925060203d8111610793576107848183610ae6565b9038610d02565b50346101a95760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a95773ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610e57576040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152602090f35b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152fd5b50346101a95760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a957602073ffffffffffffffffffffffffffffffffffffffff60005460101c16604051908152f35b50346101a95760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a957602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346101a95760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a957600435610fdd8161018b565b60443567ffffffffffffffff81116101a95760009161100c611004849336906004016101ae565b6104c8611c4b565b9060208251920190602435905af16110226118a8565b901561102a57005b602081519101fd5b50346101a95760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a95761106d60043561018b565b61107860243561018b565b67ffffffffffffffff6044358181116101a9576110999036906004016103eb565b50506064358181116101a9576110b39036906004016103eb565b50506084359081116101a9576110cd9036906004016101ae565b50506040517fbc197c81000000000000000000000000000000000000000000000000000000008152602090f35b50346101a95760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a95760206040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152818160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa9081156111cc575b6000916111af575b50604051908152f35b6111c69150823d8111610793576107848183610ae6565b386111a6565b6111d46115e5565b61119e565b50346101a95760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a9576004356112158161018b565b6112776000549161123d60ff8460081c16158094819561132f575b811561130f575b50611b14565b8261126e60017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff006000541617600055565b6112d957611b9f565b61127d57005b6112aa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff60005416600055565b604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602090a1005b61130a6101007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff6000541617600055565b611b9f565b303b15915081611321575b5038611237565b6001915060ff16143861131a565b600160ff8216109150611230565b50346101a95760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a9576108566040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482015260208160448173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa908115611421575b600091611403575b506040519081529081906020820190565b61141b915060203d8111610793576107848183610ae6565b386113f2565b6114296115e5565b6113ea565b50346101a95760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a95761146960043561018b565b61147460243561018b565b60843567ffffffffffffffff81116101a9576114949036906004016101ae565b505060206040517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b156114c757565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152fd5b1561155257565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152fd5b908160209103126101a9575190565b506040513d6000823e3d90fd5b156115f957565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152fd5b803b156116e55773ffffffffffffffffffffffffffffffffffffffff7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc91167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152fd5b906117738261167d565b73ffffffffffffffffffffffffffffffffffffffff82167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a2805115801590611840575b6117c2575050565b61183d91600080604051936117d685610aca565b602785527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208601527f206661696c6564000000000000000000000000000000000000000000000000006040860152602081519101845af46118376118a8565b9161193d565b50565b5060006117ba565b906118528261167d565b73ffffffffffffffffffffffffffffffffffffffff82167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a28051158015906118a0576117c2575050565b5060016117ba565b3d156118d3573d906118b982610b27565b916118c76040519384610ae6565b82523d6000602084013e565b606090565b156118df57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b919290156119605750815115611951575090565b61195d903b15156118d8565b90565b8251909150156119735750805190602001fd5b604051907f08c379a000000000000000000000000000000000000000000000000000000000825281602080600483015282519283602484015260005b8481106119f0575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f836000604480968601015201168101030190fd5b8181018301518682016044015285935082016119af565b80611a0f5750565b600080808093337ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff15061183d6118a8565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9190811015611a82575b60051b0190565b611a8a611a41565b611a7b565b3561195d8161018b565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1813603018212156101a9570180359067ffffffffffffffff82116101a9576020019181360383136101a957565b9091611b0392811015611b07575b60051b810190611a99565b9091565b611b0f611a41565b611af8565b15611b1b57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152fd5b7fffffffffffffffffffff0000000000000000000000000000000000000000ffff75ffffffffffffffffffffffffffffffffffffffff00006000549260101b169116178060005573ffffffffffffffffffffffffffffffffffffffff809160101c16907f0000000000000000000000000000000000000000000000000000000000000000167f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de600080a3565b73ffffffffffffffffffffffffffffffffffffffff807f0000000000000000000000000000000000000000000000000000000000000000163314908115611cf3575b5015611c9557565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152fd5b905060005460101c16331438611c8d565b9060405160208101917f19457468657265756d205369676e6564204d6573736167653a0a3332000000008352603c820152603c8152611d4281610aca565b519020611d89611d8173ffffffffffffffffffffffffffffffffffffffff92611d7b6104c88560005460101c1696610140810190611a99565b90611f5b565b919091611dd2565b1603611d9457600090565b600190565b60051115611da357565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b611ddb81611d99565b80611de35750565b611dec81611d99565b60018103611e53576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b611e5c81611d99565b60028103611ec3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b80611ecf600392611d99565b14611ed657565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608490fd5b906041815114600014611f8557611b03916020820151906060604084015193015160001a90611f8f565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116120205791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15612013575b815173ffffffffffffffffffffffffffffffffffffffff81161561200d579190565b50600190565b61201b6115e5565b611feb565b50505050600090600390565b600091829182602083519301915af16120436118a8565b901561102a5750565b73ffffffffffffffffffffffffffffffffffffffff60005460101c16331480156120d6575b1561207857565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152fd5b5030331461207156fea264697066735822122064340709e2302b7c389d4fa9f6710ad98eef5d24fb994c389ec27f1e3195d44564736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var SimpleAccount__factory = /** @class */ (function (_super) {
    __extends(SimpleAccount__factory, _super);
    function SimpleAccount__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    SimpleAccount__factory.prototype.deploy = function (anEntryPoint, overrides) {
        return _super.prototype.deploy.call(this, anEntryPoint, overrides || {});
    };
    SimpleAccount__factory.prototype.getDeployTransaction = function (anEntryPoint, overrides) {
        return _super.prototype.getDeployTransaction.call(this, anEntryPoint, overrides || {});
    };
    SimpleAccount__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    SimpleAccount__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    SimpleAccount__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    SimpleAccount__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    SimpleAccount__factory.bytecode = _bytecode;
    SimpleAccount__factory.abi = _abi;
    return SimpleAccount__factory;
}(ethers_1.ContractFactory));
exports.SimpleAccount__factory = SimpleAccount__factory;
