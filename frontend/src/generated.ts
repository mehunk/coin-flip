import { createUseReadContract } from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CoinFlip
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const coinFlipAbi = [
  {
    type: 'function',
    inputs: [{ name: 'heads', internalType: 'bool', type: 'bool' }],
    name: 'flipCoin',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
] as const

/**
 *
 */
export const coinFlipAddress = {
  31337: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
} as const

/**
 *
 */
export const coinFlipConfig = {
  address: coinFlipAddress,
  abi: coinFlipAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link coinFlipAbi}__
 *
 *
 */
export const useReadCoinFlip = /*#__PURE__*/ createUseReadContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"flipCoin"`
 *
 *
 */
export const useReadCoinFlipFlipCoin = /*#__PURE__*/ createUseReadContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
  functionName: 'flipCoin',
})
