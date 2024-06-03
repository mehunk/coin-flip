import { type HardhatUserConfig, vars } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox-viem'

const ALCHEMY_API_KEY = vars.get('ALCHEMY_API_KEY')

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    sepolia: {
      chainId: 11155111,
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [vars.get('TEST_PK')],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: vars.get('ETHERSCAN_API_KEY'),
    },
  },
  sourcify: {
    enabled: true,
  },
  gasReporter: {
    enabled: true,
    outputFile: 'gas-report.txt',
    noColors: true,
    currency: 'USD',
    coinmarketcap: vars.get('COINMARKETCAP_API_KEY'),
  },
}

export default config
