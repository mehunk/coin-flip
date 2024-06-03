import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const CoinFlipModule = buildModule('CoinFlip', (m) => {
  const ethUsdPriceFeedAddress = m.getParameter('ethUsdPriceFeedAddress')
  const vrfCoordinatorAddress = m.getParameter('vrfCoordinatorAddress')
  const subscriptionId = m.getParameter('subscriptionId')
  const keyHash = m.getParameter('keyHash')

  const coinFlip = m.contract('CoinFlip', [
    ethUsdPriceFeedAddress,
    subscriptionId,
    vrfCoordinatorAddress,
    keyHash,
  ])

  return { coinFlip }
})

export default CoinFlipModule
