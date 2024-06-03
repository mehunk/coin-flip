import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

import { BASE_FEE, GAS_PRICE_LINK, WEI_PER_UNIT_LINK } from '../../constants'

export default buildModule('VRFCoordinatorV2_5Mock', (m) => {
  const vrfCoordinatorV2_5Mock = m.contract('VRFCoordinatorV2_5Mock', [
    BASE_FEE,
    GAS_PRICE_LINK,
    WEI_PER_UNIT_LINK,
  ])

  return { vrfCoordinatorV2_5Mock }
})
