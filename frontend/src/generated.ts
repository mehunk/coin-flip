import {
  createUseReadContract,
  createUseWatchContractEvent,
  createUseWriteContract,
  createUseSimulateContract,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AggregatorInterface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const aggregatorInterfaceAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'current',
        internalType: 'int256',
        type: 'int256',
        indexed: true,
      },
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'updatedAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AnswerUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'startedBy',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'startedAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NewRound',
  },
  {
    type: 'function',
    inputs: [{ name: 'roundId', internalType: 'uint256', type: 'uint256' }],
    name: 'getAnswer',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'roundId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestAnswer',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestRound',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AggregatorV2V3Interface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const aggregatorV2V3InterfaceAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'current',
        internalType: 'int256',
        type: 'int256',
        indexed: true,
      },
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'updatedAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AnswerUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'startedBy',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'startedAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NewRound',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'description',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'roundId', internalType: 'uint256', type: 'uint256' }],
    name: 'getAnswer',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint80', type: 'uint80' }],
    name: 'getRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'roundId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestAnswer',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestRound',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AggregatorV3Interface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const aggregatorV3InterfaceAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'description',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint80', type: 'uint80' }],
    name: 'getRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CoinFlip
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa4Dc3bEB2A6Ed22906AaBfa9f808882bBF3EBD34)
 */
export const coinFlipAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'priceFeedAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'won', internalType: 'bool', type: 'bool', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Land',
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'MINIMUM_USD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'heads', internalType: 'bool', type: 'bool' }],
    name: 'flipCoin',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPriceFeed',
    outputs: [
      {
        name: '',
        internalType: 'contract AggregatorV3Interface',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa4Dc3bEB2A6Ed22906AaBfa9f808882bBF3EBD34)
 */
export const coinFlipAddress = {
  31337: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
  11155111: '0xa4Dc3bEB2A6Ed22906AaBfa9f808882bBF3EBD34',
} as const

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa4Dc3bEB2A6Ed22906AaBfa9f808882bBF3EBD34)
 */
export const coinFlipConfig = {
  address: coinFlipAddress,
  abi: coinFlipAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockV3Aggregator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockV3AggregatorAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_decimals', internalType: 'uint8', type: 'uint8' },
      { name: '_initialAnswer', internalType: 'int256', type: 'int256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'current',
        internalType: 'int256',
        type: 'int256',
        indexed: true,
      },
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'updatedAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AnswerUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'startedBy',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'startedAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NewRound',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'description',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getAnswer',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint80', type: 'uint80' }],
    name: 'getRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestAnswer',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestRound',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_answer', internalType: 'int256', type: 'int256' }],
    name: 'updateAnswer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_roundId', internalType: 'uint80', type: 'uint80' },
      { name: '_answer', internalType: 'int256', type: 'int256' },
      { name: '_timestamp', internalType: 'uint256', type: 'uint256' },
      { name: '_startedAt', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateRoundData',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorInterfaceAbi}__
 */
export const useReadAggregatorInterface = /*#__PURE__*/ createUseReadContract({
  abi: aggregatorInterfaceAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorInterfaceAbi}__ and `functionName` set to `"getAnswer"`
 */
export const useReadAggregatorInterfaceGetAnswer =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorInterfaceAbi,
    functionName: 'getAnswer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorInterfaceAbi}__ and `functionName` set to `"getTimestamp"`
 */
export const useReadAggregatorInterfaceGetTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorInterfaceAbi,
    functionName: 'getTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorInterfaceAbi}__ and `functionName` set to `"latestAnswer"`
 */
export const useReadAggregatorInterfaceLatestAnswer =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorInterfaceAbi,
    functionName: 'latestAnswer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorInterfaceAbi}__ and `functionName` set to `"latestRound"`
 */
export const useReadAggregatorInterfaceLatestRound =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorInterfaceAbi,
    functionName: 'latestRound',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorInterfaceAbi}__ and `functionName` set to `"latestTimestamp"`
 */
export const useReadAggregatorInterfaceLatestTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorInterfaceAbi,
    functionName: 'latestTimestamp',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aggregatorInterfaceAbi}__
 */
export const useWatchAggregatorInterfaceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: aggregatorInterfaceAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aggregatorInterfaceAbi}__ and `eventName` set to `"AnswerUpdated"`
 */
export const useWatchAggregatorInterfaceAnswerUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aggregatorInterfaceAbi,
    eventName: 'AnswerUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aggregatorInterfaceAbi}__ and `eventName` set to `"NewRound"`
 */
export const useWatchAggregatorInterfaceNewRoundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aggregatorInterfaceAbi,
    eventName: 'NewRound',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV2V3InterfaceAbi}__
 */
export const useReadAggregatorV2V3Interface =
  /*#__PURE__*/ createUseReadContract({ abi: aggregatorV2V3InterfaceAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV2V3InterfaceAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadAggregatorV2V3InterfaceDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV2V3InterfaceAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV2V3InterfaceAbi}__ and `functionName` set to `"description"`
 */
export const useReadAggregatorV2V3InterfaceDescription =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV2V3InterfaceAbi,
    functionName: 'description',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV2V3InterfaceAbi}__ and `functionName` set to `"getAnswer"`
 */
export const useReadAggregatorV2V3InterfaceGetAnswer =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV2V3InterfaceAbi,
    functionName: 'getAnswer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV2V3InterfaceAbi}__ and `functionName` set to `"getRoundData"`
 */
export const useReadAggregatorV2V3InterfaceGetRoundData =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV2V3InterfaceAbi,
    functionName: 'getRoundData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV2V3InterfaceAbi}__ and `functionName` set to `"getTimestamp"`
 */
export const useReadAggregatorV2V3InterfaceGetTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV2V3InterfaceAbi,
    functionName: 'getTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV2V3InterfaceAbi}__ and `functionName` set to `"latestAnswer"`
 */
export const useReadAggregatorV2V3InterfaceLatestAnswer =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV2V3InterfaceAbi,
    functionName: 'latestAnswer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV2V3InterfaceAbi}__ and `functionName` set to `"latestRound"`
 */
export const useReadAggregatorV2V3InterfaceLatestRound =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV2V3InterfaceAbi,
    functionName: 'latestRound',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV2V3InterfaceAbi}__ and `functionName` set to `"latestRoundData"`
 */
export const useReadAggregatorV2V3InterfaceLatestRoundData =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV2V3InterfaceAbi,
    functionName: 'latestRoundData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV2V3InterfaceAbi}__ and `functionName` set to `"latestTimestamp"`
 */
export const useReadAggregatorV2V3InterfaceLatestTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV2V3InterfaceAbi,
    functionName: 'latestTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV2V3InterfaceAbi}__ and `functionName` set to `"version"`
 */
export const useReadAggregatorV2V3InterfaceVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV2V3InterfaceAbi,
    functionName: 'version',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aggregatorV2V3InterfaceAbi}__
 */
export const useWatchAggregatorV2V3InterfaceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: aggregatorV2V3InterfaceAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aggregatorV2V3InterfaceAbi}__ and `eventName` set to `"AnswerUpdated"`
 */
export const useWatchAggregatorV2V3InterfaceAnswerUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aggregatorV2V3InterfaceAbi,
    eventName: 'AnswerUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aggregatorV2V3InterfaceAbi}__ and `eventName` set to `"NewRound"`
 */
export const useWatchAggregatorV2V3InterfaceNewRoundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aggregatorV2V3InterfaceAbi,
    eventName: 'NewRound',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__
 */
export const useReadAggregatorV3Interface = /*#__PURE__*/ createUseReadContract(
  { abi: aggregatorV3InterfaceAbi },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadAggregatorV3InterfaceDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV3InterfaceAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"description"`
 */
export const useReadAggregatorV3InterfaceDescription =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV3InterfaceAbi,
    functionName: 'description',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"getRoundData"`
 */
export const useReadAggregatorV3InterfaceGetRoundData =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV3InterfaceAbi,
    functionName: 'getRoundData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"latestRoundData"`
 */
export const useReadAggregatorV3InterfaceLatestRoundData =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV3InterfaceAbi,
    functionName: 'latestRoundData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"version"`
 */
export const useReadAggregatorV3InterfaceVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV3InterfaceAbi,
    functionName: 'version',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link coinFlipAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa4Dc3bEB2A6Ed22906AaBfa9f808882bBF3EBD34)
 */
export const useReadCoinFlip = /*#__PURE__*/ createUseReadContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"MINIMUM_USD"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa4Dc3bEB2A6Ed22906AaBfa9f808882bBF3EBD34)
 */
export const useReadCoinFlipMinimumUsd = /*#__PURE__*/ createUseReadContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
  functionName: 'MINIMUM_USD',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"getPriceFeed"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa4Dc3bEB2A6Ed22906AaBfa9f808882bBF3EBD34)
 */
export const useReadCoinFlipGetPriceFeed = /*#__PURE__*/ createUseReadContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
  functionName: 'getPriceFeed',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link coinFlipAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa4Dc3bEB2A6Ed22906AaBfa9f808882bBF3EBD34)
 */
export const useWriteCoinFlip = /*#__PURE__*/ createUseWriteContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"flipCoin"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa4Dc3bEB2A6Ed22906AaBfa9f808882bBF3EBD34)
 */
export const useWriteCoinFlipFlipCoin = /*#__PURE__*/ createUseWriteContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
  functionName: 'flipCoin',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link coinFlipAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa4Dc3bEB2A6Ed22906AaBfa9f808882bBF3EBD34)
 */
export const useSimulateCoinFlip = /*#__PURE__*/ createUseSimulateContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"flipCoin"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa4Dc3bEB2A6Ed22906AaBfa9f808882bBF3EBD34)
 */
export const useSimulateCoinFlipFlipCoin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    functionName: 'flipCoin',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link coinFlipAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa4Dc3bEB2A6Ed22906AaBfa9f808882bBF3EBD34)
 */
export const useWatchCoinFlipEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: coinFlipAbi,
  address: coinFlipAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link coinFlipAbi}__ and `eventName` set to `"Land"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa4Dc3bEB2A6Ed22906AaBfa9f808882bBF3EBD34)
 */
export const useWatchCoinFlipLandEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    eventName: 'Land',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__
 */
export const useReadMockV3Aggregator = /*#__PURE__*/ createUseReadContract({
  abi: mockV3AggregatorAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadMockV3AggregatorDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: mockV3AggregatorAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `functionName` set to `"description"`
 */
export const useReadMockV3AggregatorDescription =
  /*#__PURE__*/ createUseReadContract({
    abi: mockV3AggregatorAbi,
    functionName: 'description',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `functionName` set to `"getAnswer"`
 */
export const useReadMockV3AggregatorGetAnswer =
  /*#__PURE__*/ createUseReadContract({
    abi: mockV3AggregatorAbi,
    functionName: 'getAnswer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `functionName` set to `"getRoundData"`
 */
export const useReadMockV3AggregatorGetRoundData =
  /*#__PURE__*/ createUseReadContract({
    abi: mockV3AggregatorAbi,
    functionName: 'getRoundData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `functionName` set to `"getTimestamp"`
 */
export const useReadMockV3AggregatorGetTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: mockV3AggregatorAbi,
    functionName: 'getTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `functionName` set to `"latestAnswer"`
 */
export const useReadMockV3AggregatorLatestAnswer =
  /*#__PURE__*/ createUseReadContract({
    abi: mockV3AggregatorAbi,
    functionName: 'latestAnswer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `functionName` set to `"latestRound"`
 */
export const useReadMockV3AggregatorLatestRound =
  /*#__PURE__*/ createUseReadContract({
    abi: mockV3AggregatorAbi,
    functionName: 'latestRound',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `functionName` set to `"latestRoundData"`
 */
export const useReadMockV3AggregatorLatestRoundData =
  /*#__PURE__*/ createUseReadContract({
    abi: mockV3AggregatorAbi,
    functionName: 'latestRoundData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `functionName` set to `"latestTimestamp"`
 */
export const useReadMockV3AggregatorLatestTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: mockV3AggregatorAbi,
    functionName: 'latestTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `functionName` set to `"version"`
 */
export const useReadMockV3AggregatorVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: mockV3AggregatorAbi,
    functionName: 'version',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__
 */
export const useWriteMockV3Aggregator = /*#__PURE__*/ createUseWriteContract({
  abi: mockV3AggregatorAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `functionName` set to `"updateAnswer"`
 */
export const useWriteMockV3AggregatorUpdateAnswer =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockV3AggregatorAbi,
    functionName: 'updateAnswer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `functionName` set to `"updateRoundData"`
 */
export const useWriteMockV3AggregatorUpdateRoundData =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockV3AggregatorAbi,
    functionName: 'updateRoundData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__
 */
export const useSimulateMockV3Aggregator =
  /*#__PURE__*/ createUseSimulateContract({ abi: mockV3AggregatorAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `functionName` set to `"updateAnswer"`
 */
export const useSimulateMockV3AggregatorUpdateAnswer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockV3AggregatorAbi,
    functionName: 'updateAnswer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `functionName` set to `"updateRoundData"`
 */
export const useSimulateMockV3AggregatorUpdateRoundData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockV3AggregatorAbi,
    functionName: 'updateRoundData',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockV3AggregatorAbi}__
 */
export const useWatchMockV3AggregatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: mockV3AggregatorAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `eventName` set to `"AnswerUpdated"`
 */
export const useWatchMockV3AggregatorAnswerUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockV3AggregatorAbi,
    eventName: 'AnswerUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockV3AggregatorAbi}__ and `eventName` set to `"NewRound"`
 */
export const useWatchMockV3AggregatorNewRoundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockV3AggregatorAbi,
    eventName: 'NewRound',
  })
