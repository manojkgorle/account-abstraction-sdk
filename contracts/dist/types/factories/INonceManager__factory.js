"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.INonceManager__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                internalType: "uint192",
                name: "key",
                type: "uint192"
            },
        ],
        name: "getNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint192",
                name: "key",
                type: "uint192"
            },
        ],
        name: "incrementNonce",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var INonceManager__factory = /** @class */ (function () {
    function INonceManager__factory() {
    }
    INonceManager__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    INonceManager__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    INonceManager__factory.abi = _abi;
    return INonceManager__factory;
}());
exports.INonceManager__factory = INonceManager__factory;
