import { useState, useCallback } from 'react'
import { readContract } from '@wagmi/core'
import { useChainId } from 'wagmi'

import { coinFlipAbi, coinFlipAddress } from '../generated'
import { config } from '../wagmi'

function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 3_000))
}

function useFlipCoin() {
  const chainId = useChainId()
  const [isLoading, setLoading] = useState(false)

  const flipCoin = useCallback((prediction: boolean) => {
    setLoading(true)
    return sleep().then(() =>
      readContract(config, {
        address: coinFlipAddress[chainId],
        abi: coinFlipAbi,
        functionName: 'flipCoin',
        args: [prediction],
      }).finally(() => setLoading(false)),
    )
  }, [])

  return {
    isLoading,
    flipCoin,
  }
}

export default useFlipCoin
