import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

import { DECIMALS, INITIAL_ANSWER } from '../../constants'

export default buildModule('MockV3Aggregator', (m) => {
  const mockV3Aggregator = m.contract('MockV3Aggregator', [
    DECIMALS,
    INITIAL_ANSWER,
  ])

  return { mockV3Aggregator }
})
