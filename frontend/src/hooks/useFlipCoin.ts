import { useState, useCallback } from 'react'
import { usePublicClient, useChainId } from 'wagmi'
import { parseEther, formatEther, parseEventLogs } from 'viem'

import {
  coinFlipAddress,
  coinFlipAbi,
  useWriteCoinFlipFlipCoin,
} from '../generated'

type GameResult = {
  won: boolean
  amount: bigint
}

function useFlipCoin() {
  const chainId = useChainId()
  const publicClient = usePublicClient()
  const [isLoading, setLoading] = useState(false)
  const { writeContractAsync } = useWriteCoinFlipFlipCoin()

  const waitForLandedEvent = useCallback(
    async (requestId: bigint) => {
      return new Promise<GameResult>((resolve) => {
        const unwatch = publicClient.watchContractEvent({
          address: coinFlipAddress[chainId],
          abi: coinFlipAbi,
          eventName: 'Landed',
          onLogs: ([log]) => {
            if (log.args.requestId === requestId) {
              unwatch()
              resolve({
                won: log.args.won as boolean,
                amount: log.args.amount as bigint,
              })
            }
          },
        })
      })
    },
    [publicClient, chainId],
  )

  const flipCoin = useCallback(
    async (prediction: boolean) => {
      setLoading(true)

      const hash = await writeContractAsync({
        args: [prediction],
        value: parseEther('0.001'),
      })
      const txReceipt = await publicClient.waitForTransactionReceipt({
        hash,
      })
      const [event] = parseEventLogs({
        eventName: 'Flipped',
        abi: coinFlipAbi,
        logs: txReceipt.logs,
      })
      const { requestId } = event.args
      const { won, amount } = await waitForLandedEvent(requestId)

      setLoading(false)
      return {
        won: won,
        prizeAmount: formatEther(amount),
      }
    },
    [publicClient],
  )

  return {
    isLoading,
    flipCoin,
  }
}

export default useFlipCoin
