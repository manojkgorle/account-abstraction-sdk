// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.12;

import "../core/BasePaymaster.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//@todo defi integrated smart account wallet
contract customPaymaster is BasePaymaster, ERC20 {
    //@todo necessary definitions for conversion rate.
    uint256 public conversionRateTokenToEth = 1 ether;

    constructor(
        IEntryPoint _entryPoint
    ) BasePaymaster(_entryPoint) ERC20("testToken", "TsT") {
        if (tx.origin != msg.sender) {
            _transferOwnership(tx.origin);
        }
    }

    //@todo testing things for 2 types: one as this is our token we can directly deduct the tokens making ourselves the global approver
    // also we can test if tokens are approved in advance & if the token value is more than what we need to pay
    // test and play with postOp cases.
    function safeMint(address to, uint256 _amount) public onlyOwner {
        _mint(to, _amount);
    }

    function _validatePaymasterUserOp(
        UserOperation calldata userOp,
        bytes32 userOpHash,
        uint256 maxCost
    )
        internal
        view
        virtual
        override
        returns (bytes memory context, uint256 validationData)
    {
        // (userOp, userOpHash, maxCost);
        // so after address, we pass a integer indicating how many tokens a user is willing to pay for transaction._validatePaymasterUserOp
        //@todo also implement signature verification --> sign userOpHash with our private key and recover to match if it is signed or not
        address sender = userOp.sender;
        uint32 will = abi.decode(userOp.paymasterAndData[20:], (uint32));
        uint256 allowed = allowance(sender, address(this));
        if (
            allowed * conversionRateTokenToEth >=
            will * conversionRateTokenToEth
        ) {
            // transferFrom(sender,address(this),) @todo check for required number of tokens
        }
        return (
            "",
            allowed * conversionRateTokenToEth >=
                will * conversionRateTokenToEth
                ? 1
                : 0
        );
    }
}
