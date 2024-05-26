import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const CoinFlipModule = buildModule('CoinFlip', (m) => {
  const ethUsdPriceFeedAddress = m.getParameter('ethUsdPriceFeedAddress')

  const coinFlip = m.contract('CoinFlip', [ethUsdPriceFeedAddress])

  return { coinFlip }
})

export default CoinFlipModule
