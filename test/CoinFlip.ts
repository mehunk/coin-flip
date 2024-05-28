import { loadFixture } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers'
import { expect, assert } from 'chai'
import hre from 'hardhat'
import { parseEther, parseEventLogs } from 'viem'

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

    await deployer.sendTransaction({
      to: coinFlip.address,
      value: parseEther('1.0'),
    })

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
      const { coinFlip, deployer, publicClient } = await loadFixture(
        deployCoinFlipFixture
      )

      const startingDeployerBalance = await publicClient.getBalance({
        address: deployer.account.address,
      })

      const hash = await coinFlip.write.flipCoin([true], {
        value: parseEther('0.001'),
      })

      const txReceipt = await publicClient.waitForTransactionReceipt({ hash })

      const events = parseEventLogs({
        logs: txReceipt.logs,
        abi: coinFlip.abi,
      })

      const endingDeployerBalance = await publicClient.getBalance({
        address: deployer.account.address,
      })

      expect(events).to.have.length.above(0)

      const event = events[0]

      assert.equal(
        event.args.sender?.toUpperCase(),
        deployer.account.address.toUpperCase()
      )
      assert.equal(event.args.won, true)
      assert.equal(event.args.amount, parseEther('0.001') * 2n)

      assert.equal(
        endingDeployerBalance,
        startingDeployerBalance +
          parseEther('0.001') -
          txReceipt.effectiveGasPrice * txReceipt.gasUsed
      )
    })

    it('Should lose if the guess is wrong', async function () {
      const { coinFlip, deployer, publicClient } = await loadFixture(
        deployCoinFlipFixture
      )

      const hash = await coinFlip.write.flipCoin([false], {
        value: parseEther('0.001'),
      })

      const txReceipt = await publicClient.waitForTransactionReceipt({ hash })

      const events = parseEventLogs({
        logs: txReceipt.logs,
        abi: coinFlip.abi,
      })

      expect(events).to.have.length.above(0)

      const event = events[0]

      assert.equal(
        event.args.sender?.toUpperCase(),
        deployer.account.address.toUpperCase()
      )
      assert.equal(event.args.won, false)
      assert.equal(event.args.amount, 0n)
    })

    it('Balance should be greater than 0', async () => {
      const { coinFlip, publicClient } = await loadFixture(
        deployCoinFlipFixture
      )

      await coinFlip.write.flipCoin([false], {
        value: parseEther('0.001'),
      })

      const endingCoinFlipBalance = await publicClient.getBalance({
        address: coinFlip.address,
      })

      assert.notEqual(endingCoinFlipBalance, 0n)
    })
  })
})
