import { loadFixture } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers'
import { expect, assert } from 'chai'
import hre from 'hardhat'
import { parseEther } from 'viem'

import { DECIMALS, INITIAL_ANSWER } from '../constants'

describe('CoinFlip', function () {
  async function deployCoinFlipFixture() {
    const publicClient = await hre.viem.getPublicClient()
    const [deployer] = await hre.viem.getWalletClients()

    // @ts-ignore
    const mockV3Aggregator = await hre.viem.deployContract('MockV3Aggregator', [
      DECIMALS,
      INITIAL_ANSWER,
    ])

    const coinFlip = await hre.viem.deployContract('CoinFlip', [
      mockV3Aggregator.address,
    ])

    return {
      publicClient,
      deployer,
      coinFlip,
    }
  }

  describe('flipCoin', function () {
    it("Should fail if you don't send enough ETH", async () => {
      const { coinFlip } = await loadFixture(deployCoinFlipFixture)

      await expect(
        coinFlip.write.flipCoin([true], {
          value: parseEther('0.0001'),
        })
      ).to.be.rejectedWith('You need to spend more ETH!')
    })

    it('Should win if the guess is correct', async function () {
      const { coinFlip, deployer } = await loadFixture(deployCoinFlipFixture)

      await coinFlip.write.flipCoin([true], {
        value: parseEther('0.001'),
      })

      const events = await coinFlip.getEvents.Land()

      expect(events).to.have.length.above(0)

      const event = events[0]

      assert.equal(
        event.args.sender?.toUpperCase(),
        deployer.account.address.toUpperCase()
      )
      assert.equal(event.args.won, true)
    })

    it('Should lose if the guess is wrong', async function () {
      const { coinFlip, deployer } = await loadFixture(deployCoinFlipFixture)

      await coinFlip.write.flipCoin([false], {
        value: parseEther('0.001'),
      })

      const events = await coinFlip.getEvents.Land()

      expect(events).to.have.length.above(0)

      const event = events[0]

      assert.equal(
        event.args.sender?.toUpperCase(),
        deployer.account.address.toUpperCase()
      )
      assert.equal(event.args.won, false)
    })

    it('Balance should be greater than 0', async () => {
      const { coinFlip, publicClient } = await loadFixture(
        deployCoinFlipFixture
      )

      await coinFlip.write.flipCoin([true], {
        value: parseEther('0.001'),
      })

      const endingCoinFlipBalance = await publicClient.getBalance({
        address: coinFlip.address,
      })

      assert.notEqual(endingCoinFlipBalance, 0n)
    })
  })
})
