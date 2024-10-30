// SPDX-License-Identifier: MIT

pragma solidity ^0.8.27;

contract EnergyToken {
    string tokenName;
    string tokenSymbol;
    uint256 totalSupply;
    address owner;

    constructor(string memory _name, string memory _symbol) {
        tokenName = _name;
        tokenSymbol = _symbol;
        owner = msg.sender;
        totalSupply = 1_000_000_000 * (10 ** 18);
    }
}
