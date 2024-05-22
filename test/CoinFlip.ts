import { loadFixture } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers'
import { expect } from 'chai'
import hre from 'hardhat'

describe('CoinFlip', function () {
  async function deployCoinFlipFixture() {
    const coinFlip = await hre.viem.deployContract('CoinFlip')

    return {
      coinFlip,
    }
  }

  describe('flipCoin', function () {
    it('Should win if the guess is correct', async function () {
      const { coinFlip } = await loadFixture(deployCoinFlipFixture)

      expect(await coinFlip.read.flipCoin([true])).to.equal(true)
    })

    it('Should lose if the guess is wrong', async function () {
      const { coinFlip } = await loadFixture(deployCoinFlipFixture)

      expect(await coinFlip.read.flipCoin([false])).to.equal(false)
    })
  })
})
