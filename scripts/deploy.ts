import { ignition, network, viem } from 'hardhat'
import { vars } from 'hardhat/config'
import { parseEventLogs } from 'viem'

import { KEY_HASH } from '../constants'
import { networkConfigMap, developmentChains } from '../helper-hardhat-config'

import MockV3AggregatorModule from '../ignition/modules/MockV3Aggregator'
import VRFCoordinatorV2_5Mock from '../ignition/modules/VRFCoordinatorV2_5Mock'
import CoinFlipModule from '../ignition/modules/CoinFlip'
import { verify } from '../utils/verify'

async function main() {
  const chainId = network.config.chainId

  let ethUsdPriceFeedAddress: string | undefined
  let vrfCoordinatorAddress: string | undefined
  let subscriptionId: bigint | undefined
  let keyHash: string | undefined
  let vrfCoordinatorV2_5Mock: any

  // If it is development
  if (developmentChains.includes(network.name)) {
    const { mockV3Aggregator } = await ignition.deploy(MockV3AggregatorModule)
    ;({ vrfCoordinatorV2_5Mock } = await ignition.deploy(
      VRFCoordinatorV2_5Mock
    ))

    ethUsdPriceFeedAddress = mockV3Aggregator.address
    vrfCoordinatorAddress = vrfCoordinatorV2_5Mock.address

    console.log(`MockV3Aggregator deployed to: ${ethUsdPriceFeedAddress}`)
    console.log(`VRFCoordinatorV2Mock deployed to: ${vrfCoordinatorAddress}`)

    keyHash = KEY_HASH

    const publicClient = await viem.getPublicClient()
    const hash = await vrfCoordinatorV2_5Mock.write.createSubscription()
    const txReceipt = await publicClient.waitForTransactionReceipt({ hash })

    const subscriptionCreatedEvents = parseEventLogs({
      eventName: 'SubscriptionCreated',
      logs: txReceipt.logs,
      abi: vrfCoordinatorV2_5Mock.abi,
    })

    // @ts-expect-error
    subscriptionId = subscriptionCreatedEvents[0].args.subId
  } else if (chainId) {
    const networkConfig = networkConfigMap[chainId]
    if (!networkConfig) {
      console.log(
        'There is no corresponding network config for the network specified.'
      )
      return
    }
    ;({
      ethUsdPriceFeed: ethUsdPriceFeedAddress,
      vrfCoordinator: vrfCoordinatorAddress,
      subscriptionId,
      keyHash,
    } = networkConfig)
  }

  if (
    !ethUsdPriceFeedAddress ||
    !vrfCoordinatorAddress ||
    !subscriptionId ||
    !keyHash
  ) {
    console.log(
      'Neither provided network nor local testnet, skipping deployment'
    )
    return
  }

  const { coinFlip } = await ignition.deploy(CoinFlipModule, {
    parameters: {
      CoinFlip: {
        ethUsdPriceFeedAddress,
        subscriptionId,
        vrfCoordinatorAddress,
        keyHash,
      },
    },
    config: {
      requiredConfirmations: 1,
    },
    ...(chainId && { deploymentId: `${network.name}-deployment` }),
  })

  const coinFlipAddress = coinFlip.address

  console.log(`CoinFlip deployed to: ${coinFlipAddress}`)

  if (developmentChains.includes(network.name) && vrfCoordinatorV2_5Mock) {
    await vrfCoordinatorV2_5Mock.write.addConsumer([
      subscriptionId,
      coinFlip.address,
    ])
  }

  if (
    !developmentChains.includes(network.name) &&
    vars.get('ETHERSCAN_API_KEY')
  ) {
    await verify(coinFlipAddress, [
      ethUsdPriceFeedAddress,
      subscriptionId,
      vrfCoordinatorAddress,
      keyHash,
    ])
  }
}

main().catch(console.error)
