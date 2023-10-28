let hre = require("hardhat");
let defaultAbicoder = hre.ethers.AbiCoder.defaultAbiCoder();

function packExactInputSingleParams(exactInputSingleParams) {
    return defaultAbicoder.encode(['address', 'address', 'uint24', 'address', 'uint256', 'uint256', 'uint256', 'uint160'],
        exactInputSingleParams.tokenIn, exactInputSingleParams.tokenOut, exactInputSingleParams.fee, exactInputSingleParams.recipient, exactInputSingleParams.amountIn, exactInputSingleParams.amountOutMinimum, exactInputSingleParams.sqrtPriceLimitx96);
};

async function getSwapRouter(swapRouterAddress) {
    return await hre.ethers.getContractAt("ISwapRouter", swapRouterAddress);
};

async function getPool(poolAddress) {
    return await hre.ethers.getContractAt("IUniswapV3Pool", poolAddress);
}

module.exports = { packExactInputSingleParams, getSwapRouter, getPool };