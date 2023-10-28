let hre = require("hardhat");

function generateKeyPair() {
    const wallet = hre.ethers.Wallet.createRandom();
    const publicKey = wallet.address;
    const privateKeyHex = wallet.privateKey;

    return [privateKeyHex, publicKey]
}

module.exports = generateKeyPair