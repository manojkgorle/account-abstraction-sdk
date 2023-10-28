let hre = require("hardhat");
let ethereumjsUtil = require("ethereumjs-util");
let defaultAbicoder = hre.ethers.AbiCoder.defaultAbiCoder();
let keccak256 = hre.ethers.keccak256;
let keccak_256 = require("js-sha3").keccak_256;
let EC = require("elliptic").ec;
let arrayify = hre.ethers.getBytes;


function signUserOp(op, signer, entryPointAddress, chainId) {
    // @todo we need to pass a new signer w/ eoa s credentials or else pass the privatekey to sign 
    const message = getUserOpHash(op, entryPointAddress, chainId)
    const message1 = Buffer.concat([
        Buffer.from('\x19Ethereum Signed Message:\n32', 'ascii'),
        Buffer.from(arrayify(message))
    ])
    const sig = ethereumjsUtil.ecsign(ethereumjsUtil.keccak256(message1), Buffer.from(arrayify(signer.privateKey)))
    // that's equivalent of:  await signer.signMessage(message);
    // (but without "async"
    const signedMessage = ethereumjsUtil.toRpcSig(sig.v, sig.r, sig.s)
    return {
        ...op,
        signature: signedMessage
    }
}

function getUserOpHash(op, entryPointAddress, chainId) {
    //for signature
    const userOphash = hre.ethers.keccak256(packUserOp(op))
    const enc = defaultAbicoder.encode(['bytes32', 'address', 'uint256'], [userOphash, entryPointAddress, chainId])
    return keccak256(enc)
}

function packUserOp(op) {
    //for signature
    return defaultAbicoder.encode(['address', 'uint256', 'bytes32', 'bytes32',
        'uint256', 'uint256', 'uint256', 'uint256', 'uint256',
        'bytes32'],
        [op.sender, op.nonce, keccak256(op.initCode), keccak256(op.callData),
        op.callGasLimit, op.verificationGasLimit, op.preVerificationGas, op.maxFeePerGas, op.maxPriorityFeePerGas,
        keccak256(op.paymasterAndData)])
}

async function sendTestEth(smartAccAddress, amountEth = '1') {
    const [signer] = await hre.ethers.getSigners()

    try {
        await signer.sendTransaction({ to: smartAccAddress, value: hre.ethers.parseEther(amountEth) })
    } catch (errorSTE) {
        console.log(errorSTE)
    }
}


async function paymasterDeposit(entryPointAddress, payMasterInstance) {
    await payMasterInstance.deposit({ value: hre.ethers.parseEther("10") })
}

function getPublicKeyFromPrivateKey(privateKey) {
    const wallet = new hre.ethers.Wallet(privateKey)
    return wallet.address
}

async function getInitCode(simpleAccountFactoryAddress, owner, salt = 0) {
    const simpleAccountFactory = await hre.ethers.getContractAt("SimpleAccountFactory", simpleAccountFactoryAddress)
    const tx = await simpleAccountFactory.createAccount.populateTransaction(owner, salt)
    return simpleAccountFactoryAddress + tx.data.slice(2)
}

module.exports = { signUserOp, getUserOpHash, packUserOp, sendTestEth, paymasterDeposit, getPublicKeyFromPrivateKey, getInitCode };