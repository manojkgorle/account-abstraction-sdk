const hre = require("hardhat")

async function deployEntryPoint() {
    const entryPoint = await hre.ethers.deployContract("EntryPoint");
    return entryPoint.target;
}

async function deploySimpleAccountFactory(entryPointAddress) {
    const simpleAccountFactory = await hre.ethers.deployContract("SimpleAccountFactory", [entryPointAddress]);
    return simpleAccountFactory.target;
}

async function deployCounter() {
    const counter = await hre.ethers.deployContract("TestCounter");
    return counter.target;
}

async function deployPaymaster(entryPointAddress) {
    const payMaster = await hre.ethers.deployContract("TestPaymasterAcceptAll", [entryPointAddress]);
    return payMaster.target;
}

async function getFactory(simpleAccountFactoryAddress) {
    return await hre.ethers.getContractAt("SimpleAccountFactory", simpleAccountFactoryAddress);
}

async function getAddress(simpleAccountFactoryAddress, publicKey, salt = 0) {
    const factory = await getFactory(simpleAccountFactoryAddress)
    const address = await factory.getAddress2(publicKey, salt);
    return address
}

async function getBalance(address) {
    return await hre.ethers.provider.getBalance(address);
}

async function initiateSmartAccount(simpleAccountFactoryAddress, owner, salt = 0) {
    const factory = await getFactory(simpleAccountFactoryAddress)
    const initiate = await factory.createAccount(owner, salt)
}

async function connectEntryPoint(entryPointAddress) {
    return await hre.ethers.getContractAt("EntryPoint", entryPointAddress)
}

async function connectPayMaster(payMasterAddress) {
    return await hre.ethers.getContractAt("TestPaymasterAcceptAll", payMasterAddress)
}

async function deployAll() {
    const entryPointAddress = await deployEntryPoint();
    console.log("Entrypoint Address: ", entryPointAddress);

    const SimpleAccountFactoryAddress = await deploySimpleAccountFactory(entryPointAddress);
    console.log("SimpleAccountFactory Address: ", SimpleAccountFactoryAddress);

    const counterAddress = await deployCounter();
    console.log("Counter Address: ", counterAddress);

    const paymasterAddress = await deployPaymaster(entryPointAddress);
    console.log("Paymaster Address: ", paymasterAddress);
}
deployAll()
module.exports = { deployEntryPoint, deploySimpleAccountFactory, deployCounter, deployPaymaster, getFactory, getAddress, getBalance, initiateSmartAccount, connectEntryPoint, connectPayMaster, deployAll }