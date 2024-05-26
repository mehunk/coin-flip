import { useState, useCallback } from 'react'
import { waitForTransactionReceipt, watchContractEvent } from '@wagmi/core'
import { useChainId, useAccount } from 'wagmi'
import { parseEther } from 'viem'

import {
  coinFlipAddress,
  coinFlipAbi,
  useWriteCoinFlipFlipCoin,
} from '../generated'
import { config } from '../wagmi'

function useFlipCoin() {
  const { address } = useAccount()
  const chainId = useChainId()
  const [isLoading, setLoading] = useState(false)
  const { writeContractAsync } = useWriteCoinFlipFlipCoin()

  const waitForLandEvent = useCallback(
    (hash: string) => {
      return new Promise<boolean>((resolve) => {
        const unwatch = watchContractEvent(config, {
          address: coinFlipAddress[chainId],
          abi: coinFlipAbi,
          eventName: 'Land',
          args: {
            sender: address,
          },
          onLogs: (logs) => {
            const log = logs[0]
            if (log.transactionHash === hash) {
              unwatch()
              resolve(log.args.won as boolean)
            }
          },
        })
      })
    },
    [chainId, address],
  )

  const flipCoin = useCallback(async (prediction: boolean) => {
    setLoading(true)

    const hash = await writeContractAsync({
      args: [prediction],
      value: parseEther('0.001'),
    })
    const result = await waitForLandEvent(hash)
    await waitForTransactionReceipt(config, {
      hash,
    })
    setLoading(false)
    return result
  }, [])

  return {
    isLoading,
    flipCoin,
  }
}

export default useFlipCoin
