# Decentralized Renewable Energy Sharing

This repository contains both the smart contracts and the frontend for a decentralized platform where households with surplus solar energy can sell it directly to nearby users. The platform enables peer-to-peer energy trading, with buyers and sellers agreeing on prices and transactions being handled securely through blockchain technology.

The project is built, tested, and verified on the Ethereum Sepolia Testnet.

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

This decentralized renewable energy marketplace leverages blockchain technology to facilitate secure and transparent energy trading. Households with surplus solar energy can list their energy for sale, while buyers can browse available energy and purchase it directly. The platform's blockchain-based transactions ensure trust and transparency throughout the process.

## Project Architecture

The project comprises two main components:

- **Smart Contracts**: These handle listing, buying, and payment processing for energy transactions.
- **Frontend**: A user interface built to interact seamlessly with the smart contracts, allowing users to list, browse, and purchase energy easily.

## Smart Contract Details

The smart contract currently supports the following functionality:

1. **Listing Energy**: Sellers can list available energy for sale and set their own prices.
2. **Buying Energy**: Buyers can purchase energy listed by sellers.
3. **Price Negotiation and Agreement**: Both parties agree to terms off-chain, while the contract only records the confirmed transactions.
4. **Automated Payments**: Payments are securely handled on-chain as part of the contract’s transaction process.

### Contract Components

- **ERC20.sol**: Token contract that handles purchasing, and payment processing between buyers and sellers.
- **DecentralisedResource.sol**: Main contract that handles listing, purchasing, and payment processing between buyers and sellers.

## Frontend Details

The frontend is built to provide a user-friendly interface for interacting with the decentralized marketplace. Key functionalities include:

- **Energy Listing Management**: Sellers can add and update their energy listings.
- **Energy Browsing**: Buyers can view available energy listings, filtering by criteria such as location and price.

  - **Transaction Interaction**: Buyers and sellers can connect their wallets and directly interact with the smart contracts to complete transactions.

    ## Frontend Technologies

- **React Vite**: For building the user interface.
- **Ethers.js**: To interact with the blockchain and smart contracts.
- **Tailwind CSS**: For styling and responsive design.

## Technologies Used

- **Solidity**: For writing the smart contract.
- **Hardhat**: Development environment and testing framework for deploying and testing smart contracts.
- **React**: Frontend development.
- **Web3.js/Ethers.js**: Blockchain interaction.
- **Tailwind CSS**: Styling.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or later)
- **Hardhat**: Smart contract deployment framework
- **MetaMask**: For interacting with the frontend

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

Token: [ Sepolia Token Contract](https://sepolia.etherscan.io/address/0xcDE4288aEb296A8E6C536041398B164659d3Dd28)
DecentralisedResource: [ Sepolia Resource Contract](https://sepolia.etherscan.io/address/0x98FD3b5A2aaAC11dFf931427Addf86D926C985A8)

## Running the Frontend

Start the frontend application:

```bash
cd resource-client
npm run dev
```

Connect your MetaMask wallet to the Sepolia Testnet and enjoy the experience.
