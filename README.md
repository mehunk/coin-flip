# Coin Flip

## Overview

Implement a coin flip game with Hardhat and Wagmi.

## Environment Variables

```
ALCHEMY_API_KEY
ETHERSCAN_API_KEY
COINMARKETCAP_API_KEY
```

## Deployment

### Deploy to Test Environment

#### Deploy and verify Smart Contract

```shell
$ npx hardhat ignition deploy ignition/modules/CoinFlip.ts --network sepolia --deployment-id sepolia-deployment
$ npx hardhat ignition verify sepolia-deployment
```

#### Deploy Front-end

Run the script below and upload the `dist` directory to ClouldFlare Pages manually.

```
$ npm run buld
```
