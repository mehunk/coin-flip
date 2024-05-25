import { createUseReadContract } from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CoinFlip
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x968504817bE673113F32b6d41914CF6807540B47)
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
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x968504817bE673113F32b6d41914CF6807540B47)
 */
export const coinFlipAddress = {
  31337: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  11155111: '0x968504817bE673113F32b6d41914CF6807540B47',
} as const

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x968504817bE673113F32b6d41914CF6807540B47)
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
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x968504817bE673113F32b6d41914CF6807540B47)
 */
export const useReadCoinFlip = /*#__PURE__*/ createUseReadContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"flipCoin"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x968504817bE673113F32b6d41914CF6807540B47)
 */
export const useReadCoinFlipFlipCoin = /*#__PURE__*/ createUseReadContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
  functionName: 'flipCoin',
})
