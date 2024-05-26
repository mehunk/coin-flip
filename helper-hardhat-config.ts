type NetworkConfig = {
  name: string
  ethUsdPriceFeed: string
}

type NetworkConfigMap = Record<number, NetworkConfig | undefined>

export const networkConfigMap: NetworkConfigMap = {
  11155111: {
    name: 'sepolia',
    ethUsdPriceFeed: '0x694AA1769357215DE4FAC081bf1f309aDC325306',
  },
} as const

export const developmentChains = ['hardhat', 'localhost']
