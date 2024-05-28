import { useState, useCallback } from 'react'
import { usePublicClient } from 'wagmi'
import { parseEther, formatEther, parseEventLogs } from 'viem'

import { coinFlipAbi, useWriteCoinFlipFlipCoin } from '../generated'

function useFlipCoin() {
  const publicClient = usePublicClient()
  const [isLoading, setLoading] = useState(false)
  const { writeContractAsync } = useWriteCoinFlipFlipCoin()

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
        abi: coinFlipAbi,
        logs: txReceipt.logs,
      })
      setLoading(false)
      return {
        won: event.args.won,
        prizeAmount: formatEther(event.args.amount),
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
