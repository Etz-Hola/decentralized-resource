# Decentralized Renewable Energy Sharing Smart Contract

This repository contains the smart contract for a decentralized platform where households with surplus solar energy can sell it directly to nearby users. The contract enables peer-to-peer energy trading, allowing buyers and sellers to agree on prices and automatically handle payments through blockchain transactions.

The project is built, tested and verified on the Ethereum Sepolia Testnet.

## Table of Contents

- [Overview](#overview)
- [Smart Contract Details](#smart-contract-details)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Compilation and Deployment](#compilation-and-deployment)
- [Testing](#testing)
- [License](#license)

## Overview

This smart contract is designed to facilitate secure, automated transactions in the decentralized renewable energy marketplace. By leveraging blockchain, the platform ensures trustless and transparent energy trading where users can buy or sell surplus solar energy.

## Smart Contract Details

The smart contract currently supports the following functionality:

1. **Listing Energy**: Sellers can list available energy for sale and set their own prices.
2. **Buying Energy**: Buyers can purchase energy listed by sellers.
3. **Price Negotiation and Agreement**: Both parties agree to terms off-chain, while the contract only records the confirmed transactions.
4. **Automated Payments**: Payments are securely handled on-chain as part of the contract’s transaction process.

### Contract Components

- **ERC20.sol**: Token contract that handles purchasing, and payment processing between buyers and sellers.
- **DecentralisedResource.sol**: Main contract that handles listing, purchasing, and payment processing between buyers and sellers.

## Technologies Used

- **Solidity**: For writing the smart contract.
- **Hardhat**: Development environment and testing framework for deploying and testing smart contracts.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or later)
- **Hardhat**: Smart contract deployment framework

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/decentralized-resource.git
   cd decentralized-resource
   npm install
   ```

### Compilation and Deployment

Compile the Smart Contract:

```bash
npx hardhat compile
Configure Deployment Script:
```

### Deploy the Smart Contract:

```bash
npx hardhat run scripts/deploy.js --network yourNetwork
Replace yourNetwork with the configured network (such as Rinkeby) in your Hardhat config file.
```

### Testing

Run Contract Tests: Write and run test cases to ensure all functions work as expected.

```bash
npx hardhat test
```

## Contract Addresses.

```bash
 Token: https://sepolia.etherscan.io/address/0xcDE4288aEb296A8E6C536041398B164659d3Dd28
 DecentralisedResource: https://sepolia.etherscan.io/address/0x98FD3b5A2aaAC11dFf931427Addf86D926C985A8
```
