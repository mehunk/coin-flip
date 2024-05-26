import { ignition, network } from 'hardhat'
import { vars } from 'hardhat/config'

import { networkConfigMap, developmentChains } from '../helper-hardhat-config'

import MockV3AggregatorModule from '../ignition/modules/MockV3Aggregator'
import CoinFlipModule from '../ignition/modules/CoinFlip'
import { verify } from '../utils/verify'

async function main() {
  const chainId = network.config.chainId

  let ethUsdPriceFeedAddress: string | undefined

  if (developmentChains.includes(network.name)) {
    const { mockV3Aggregator } = await ignition.deploy(MockV3AggregatorModule)
    ethUsdPriceFeedAddress = mockV3Aggregator.address
    console.log(`MockV3Aggregator deployed to: ${ethUsdPriceFeedAddress}`)
  } else if (chainId) {
    const networkConfig = networkConfigMap[chainId]
    if (!networkConfig) {
      console.log(
        'There is no corresponding network config for the network specified.'
      )
      return
    }
    ethUsdPriceFeedAddress = networkConfig['ethUsdPriceFeed']
  }

  if (!ethUsdPriceFeedAddress) {
    console.log(
      'Neither provided network nor local testnet, skipping deployment'
    )
    return
  }

  const { coinFlip } = await ignition.deploy(CoinFlipModule, {
    parameters: {
      CoinFlip: {
        ethUsdPriceFeedAddress,
      },
    },
    config: {
      requiredConfirmations: 1,
    },
    ...(chainId && { deploymentId: `${network.name}-deployment` }),
  })

  const coinFlipAddress = coinFlip.address

  console.log(`CoinFlip deployed to: ${coinFlipAddress}`)

  if (
    !developmentChains.includes(network.name) &&
    vars.get('ETHERSCAN_API_KEY')
  ) {
    await verify(coinFlipAddress, [ethUsdPriceFeedAddress])
  }
}

main().catch(console.error)
