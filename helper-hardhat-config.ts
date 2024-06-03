type NetworkConfig = {
  name: string
  ethUsdPriceFeed: string
  vrfCoordinator: string
  subscriptionId: bigint
  keyHash: string
}

type NetworkConfigMap = Record<number, NetworkConfig | undefined>

export const networkConfigMap: NetworkConfigMap = {
  11155111: {
    name: 'sepolia',
    ethUsdPriceFeed: '0x694AA1769357215DE4FAC081bf1f309aDC325306',
    vrfCoordinator: '0x9ddfaca8183c41ad55329bdeed9f6a8d53168b1b',
    subscriptionId:
      76994194027029743822203753037527576778483465583238805682498718429036775161809n,
    keyHash:
      '0x787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae',
  },
} as const

export const developmentChains = ['hardhat', 'localhost']
