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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const coinFlipAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'priceFeedAddress', internalType: 'address', type: 'address' },
      { name: 'subscriptionId', internalType: 'uint256', type: 'uint256' },
      { name: 'vrfCoordinator', internalType: 'address', type: 'address' },
      { name: 'keyHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'CoinFlip__InsufficientWager' },
  { type: 'error', inputs: [], name: 'CoinFlip__InvalidRequestId' },
  { type: 'error', inputs: [], name: 'CoinFlip__TransferPriceFailed' },
  {
    type: 'error',
    inputs: [
      { name: 'have', internalType: 'address', type: 'address' },
      { name: 'want', internalType: 'address', type: 'address' },
    ],
    name: 'OnlyCoordinatorCanFulfill',
  },
  {
    type: 'error',
    inputs: [
      { name: 'have', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'coordinator', internalType: 'address', type: 'address' },
    ],
    name: 'OnlyOwnerOrCoordinator',
  },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'vrfCoordinator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CoordinatorSet',
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
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Flipped',
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
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
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
    name: 'Landed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
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
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
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
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'uint256', type: 'uint256' },
      { name: 'randomWords', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'rawFulfillRandomWords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 's_vrfCoordinator',
    outputs: [
      {
        name: '',
        internalType: 'contract IVRFCoordinatorV2Plus',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_vrfCoordinator', internalType: 'address', type: 'address' },
    ],
    name: 'setCoordinator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const coinFlipAddress = {
  31337: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
  11155111: '0x739b89d6CF2c665192D27797CF14DA501445591C',
} as const

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const coinFlipConfig = {
  address: coinFlipAddress,
  abi: coinFlipAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ConfirmedOwner
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const confirmedOwnerAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ConfirmedOwnerWithProposal
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const confirmedOwnerWithProposalAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'newOwner', internalType: 'address', type: 'address' },
      { name: 'pendingOwner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC677Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc677ReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onTokenTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IOwnable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iOwnableAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IVRFCoordinatorV2Plus
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ivrfCoordinatorV2PlusAbi = [
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'acceptSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'addConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'cancelSubscription',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'createSubscription',
    outputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'fundSubscriptionWithNative',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'maxCount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getActiveSubscriptionIds',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'getSubscription',
    outputs: [
      { name: 'balance', internalType: 'uint96', type: 'uint96' },
      { name: 'nativeBalance', internalType: 'uint96', type: 'uint96' },
      { name: 'reqCount', internalType: 'uint64', type: 'uint64' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'consumers', internalType: 'address[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'pendingRequestExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'removeConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'req',
        internalType: 'struct VRFV2PlusClient.RandomWordsRequest',
        type: 'tuple',
        components: [
          { name: 'keyHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'subId', internalType: 'uint256', type: 'uint256' },
          {
            name: 'requestConfirmations',
            internalType: 'uint16',
            type: 'uint16',
          },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'numWords', internalType: 'uint32', type: 'uint32' },
          { name: 'extraArgs', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'requestRandomWords',
    outputs: [{ name: 'requestId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'requestSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IVRFMigratableConsumerV2Plus
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ivrfMigratableConsumerV2PlusAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'vrfCoordinator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CoordinatorSet',
  },
  {
    type: 'function',
    inputs: [
      { name: 'vrfCoordinator', internalType: 'address', type: 'address' },
    ],
    name: 'setCoordinator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IVRFSubscriptionV2Plus
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ivrfSubscriptionV2PlusAbi = [
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'acceptSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'addConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'cancelSubscription',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'createSubscription',
    outputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'fundSubscriptionWithNative',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'maxCount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getActiveSubscriptionIds',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'getSubscription',
    outputs: [
      { name: 'balance', internalType: 'uint96', type: 'uint96' },
      { name: 'nativeBalance', internalType: 'uint96', type: 'uint96' },
      { name: 'reqCount', internalType: 'uint64', type: 'uint64' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'consumers', internalType: 'address[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'pendingRequestExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'removeConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'requestSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LinkTokenInterface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const linkTokenInterfaceAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: 'remaining', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: 'decimalPlaces', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseApproval',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseApproval',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: 'tokenName', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: 'tokenSymbol', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [
      { name: 'totalTokensIssued', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transferAndCall',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

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
// RandomNumberConsumerV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const randomNumberConsumerV2Abi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'vrfCoordinator', internalType: 'address', type: 'address' },
      { name: 'keyHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'have', internalType: 'address', type: 'address' },
      { name: 'want', internalType: 'address', type: 'address' },
    ],
    name: 'OnlyCoordinatorCanFulfill',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'numWords',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'RequestSent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'randomWords',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'ReturnedRandomness',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'uint256', type: 'uint256' },
      { name: 'randomWords', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'rawFulfillRandomWords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'requestRandomWords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 's_randomWords',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 's_requestId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SubscriptionAPI
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const subscriptionApiAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'internalBalance', internalType: 'uint256', type: 'uint256' },
      { name: 'externalBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'BalanceInvariantViolated',
  },
  { type: 'error', inputs: [], name: 'FailedToSendNative' },
  { type: 'error', inputs: [], name: 'FailedToTransferLink' },
  { type: 'error', inputs: [], name: 'IndexOutOfRange' },
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InvalidCalldata' },
  {
    type: 'error',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'InvalidConsumer',
  },
  { type: 'error', inputs: [], name: 'InvalidSubscription' },
  { type: 'error', inputs: [], name: 'LinkAlreadySet' },
  { type: 'error', inputs: [], name: 'LinkNotSet' },
  {
    type: 'error',
    inputs: [
      { name: 'proposedOwner', internalType: 'address', type: 'address' },
    ],
    name: 'MustBeRequestedOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'MustBeSubOwner',
  },
  { type: 'error', inputs: [], name: 'OnlyCallableFromLink' },
  { type: 'error', inputs: [], name: 'PendingRequestExists' },
  { type: 'error', inputs: [], name: 'Reentrant' },
  { type: 'error', inputs: [], name: 'TooManyConsumers' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FundsRecovered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NativeFundsRecovered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amountLink',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountNative',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SubscriptionCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'consumer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SubscriptionConsumerAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'consumer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SubscriptionConsumerRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SubscriptionCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'oldBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SubscriptionFunded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'oldNativeBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newNativeBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SubscriptionFundedWithNative',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'SubscriptionOwnerTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'SubscriptionOwnerTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'LINK',
    outputs: [
      {
        name: '',
        internalType: 'contract LinkTokenInterface',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'LINK_NATIVE_FEED',
    outputs: [
      {
        name: '',
        internalType: 'contract AggregatorV3Interface',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_CONSUMERS',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'acceptSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'addConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'cancelSubscription',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'createSubscription',
    outputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'fundSubscriptionWithNative',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'maxCount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getActiveSubscriptionIds',
    outputs: [{ name: 'ids', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'getSubscription',
    outputs: [
      { name: 'balance', internalType: 'uint96', type: 'uint96' },
      { name: 'nativeBalance', internalType: 'uint96', type: 'uint96' },
      { name: 'reqCount', internalType: 'uint64', type: 'uint64' },
      { name: 'subOwner', internalType: 'address', type: 'address' },
      { name: 'consumers', internalType: 'address[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onTokenTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerCancelSubscription',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'pendingRequestExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'recoverFunds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address payable', type: 'address' }],
    name: 'recoverNativeFunds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'removeConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'requestSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 's_config',
    outputs: [
      {
        name: 'minimumRequestConfirmations',
        internalType: 'uint16',
        type: 'uint16',
      },
      { name: 'maxGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'reentrancyLock', internalType: 'bool', type: 'bool' },
      { name: 'stalenessSeconds', internalType: 'uint32', type: 'uint32' },
      {
        name: 'gasAfterPaymentCalculation',
        internalType: 'uint32',
        type: 'uint32',
      },
      {
        name: 'fulfillmentFlatFeeNativePPM',
        internalType: 'uint32',
        type: 'uint32',
      },
      {
        name: 'fulfillmentFlatFeeLinkDiscountPPM',
        internalType: 'uint32',
        type: 'uint32',
      },
      { name: 'nativePremiumPercentage', internalType: 'uint8', type: 'uint8' },
      { name: 'linkPremiumPercentage', internalType: 'uint8', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 's_currentSubNonce',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 's_totalBalance',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 's_totalNativeBalance',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'link', internalType: 'address', type: 'address' },
      { name: 'linkNativeFeed', internalType: 'address', type: 'address' },
    ],
    name: 'setLINKAndLINKNativeFeed',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address payable', type: 'address' },
    ],
    name: 'withdrawNative',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VRFConsumerBaseV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vrfConsumerBaseV2Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'have', internalType: 'address', type: 'address' },
      { name: 'want', internalType: 'address', type: 'address' },
    ],
    name: 'OnlyCoordinatorCanFulfill',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'uint256', type: 'uint256' },
      { name: 'randomWords', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'rawFulfillRandomWords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VRFConsumerBaseV2Plus
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vrfConsumerBaseV2PlusAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'have', internalType: 'address', type: 'address' },
      { name: 'want', internalType: 'address', type: 'address' },
    ],
    name: 'OnlyCoordinatorCanFulfill',
  },
  {
    type: 'error',
    inputs: [
      { name: 'have', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'coordinator', internalType: 'address', type: 'address' },
    ],
    name: 'OnlyOwnerOrCoordinator',
  },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'vrfCoordinator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CoordinatorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'uint256', type: 'uint256' },
      { name: 'randomWords', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'rawFulfillRandomWords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 's_vrfCoordinator',
    outputs: [
      {
        name: '',
        internalType: 'contract IVRFCoordinatorV2Plus',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_vrfCoordinator', internalType: 'address', type: 'address' },
    ],
    name: 'setCoordinator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VRFCoordinatorV2Interface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vrfCoordinatorV2InterfaceAbi = [
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint64', type: 'uint64' }],
    name: 'acceptSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'addConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'cancelSubscription',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'createSubscription',
    outputs: [{ name: 'subId', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRequestConfig',
    outputs: [
      { name: '', internalType: 'uint16', type: 'uint16' },
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint64', type: 'uint64' }],
    name: 'getSubscription',
    outputs: [
      { name: 'balance', internalType: 'uint96', type: 'uint96' },
      { name: 'reqCount', internalType: 'uint64', type: 'uint64' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'consumers', internalType: 'address[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint64', type: 'uint64' }],
    name: 'pendingRequestExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'removeConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'keyHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'subId', internalType: 'uint64', type: 'uint64' },
      {
        name: 'minimumRequestConfirmations',
        internalType: 'uint16',
        type: 'uint16',
      },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'numWords', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'requestRandomWords',
    outputs: [{ name: 'requestId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'requestSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VRFCoordinatorV2Mock
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vrfCoordinatorV2MockAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_baseFee', internalType: 'uint96', type: 'uint96' },
      { name: '_gasPriceLink', internalType: 'uint96', type: 'uint96' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InvalidConsumer' },
  { type: 'error', inputs: [], name: 'InvalidRandomWords' },
  { type: 'error', inputs: [], name: 'InvalidSubscription' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'MustBeSubOwner',
  },
  { type: 'error', inputs: [], name: 'Reentrant' },
  { type: 'error', inputs: [], name: 'TooManyConsumers' },
  { type: 'event', anonymous: false, inputs: [], name: 'ConfigSet' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'consumer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ConsumerAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'consumer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ConsumerRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'outputSeed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'payment',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
      { name: 'success', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'RandomWordsFulfilled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'keyHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'preSeed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'subId', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'minimumRequestConfirmations',
        internalType: 'uint16',
        type: 'uint16',
        indexed: false,
      },
      {
        name: 'callbackGasLimit',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'numWords',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RandomWordsRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SubscriptionCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SubscriptionCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'oldBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SubscriptionFunded',
  },
  {
    type: 'function',
    inputs: [],
    name: 'BASE_FEE',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'GAS_PRICE_LINK',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_CONSUMERS',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    name: 'acceptSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '_subId', internalType: 'uint64', type: 'uint64' },
      { name: '_consumer', internalType: 'address', type: 'address' },
    ],
    name: 'addConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_subId', internalType: 'uint64', type: 'uint64' },
      { name: '_to', internalType: 'address', type: 'address' },
    ],
    name: 'cancelSubscription',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_subId', internalType: 'uint64', type: 'uint64' },
      { name: '_consumer', internalType: 'address', type: 'address' },
    ],
    name: 'consumerIsAdded',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'createSubscription',
    outputs: [{ name: '_subId', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_requestId', internalType: 'uint256', type: 'uint256' },
      { name: '_consumer', internalType: 'address', type: 'address' },
    ],
    name: 'fulfillRandomWords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_requestId', internalType: 'uint256', type: 'uint256' },
      { name: '_consumer', internalType: 'address', type: 'address' },
      { name: '_words', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'fulfillRandomWordsWithOverride',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_subId', internalType: 'uint64', type: 'uint64' },
      { name: '_amount', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'fundSubscription',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getConfig',
    outputs: [
      {
        name: 'minimumRequestConfirmations',
        internalType: 'uint16',
        type: 'uint16',
      },
      { name: 'maxGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'stalenessSeconds', internalType: 'uint32', type: 'uint32' },
      {
        name: 'gasAfterPaymentCalculation',
        internalType: 'uint32',
        type: 'uint32',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getFallbackWeiPerUnitLink',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getFeeConfig',
    outputs: [
      {
        name: 'fulfillmentFlatFeeLinkPPMTier1',
        internalType: 'uint32',
        type: 'uint32',
      },
      {
        name: 'fulfillmentFlatFeeLinkPPMTier2',
        internalType: 'uint32',
        type: 'uint32',
      },
      {
        name: 'fulfillmentFlatFeeLinkPPMTier3',
        internalType: 'uint32',
        type: 'uint32',
      },
      {
        name: 'fulfillmentFlatFeeLinkPPMTier4',
        internalType: 'uint32',
        type: 'uint32',
      },
      {
        name: 'fulfillmentFlatFeeLinkPPMTier5',
        internalType: 'uint32',
        type: 'uint32',
      },
      { name: 'reqsForTier2', internalType: 'uint24', type: 'uint24' },
      { name: 'reqsForTier3', internalType: 'uint24', type: 'uint24' },
      { name: 'reqsForTier4', internalType: 'uint24', type: 'uint24' },
      { name: 'reqsForTier5', internalType: 'uint24', type: 'uint24' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRequestConfig',
    outputs: [
      { name: '', internalType: 'uint16', type: 'uint16' },
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: '_subId', internalType: 'uint64', type: 'uint64' }],
    name: 'getSubscription',
    outputs: [
      { name: 'balance', internalType: 'uint96', type: 'uint96' },
      { name: 'reqCount', internalType: 'uint64', type: 'uint64' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'consumers', internalType: 'address[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    name: 'pendingRequestExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '_subId', internalType: 'uint64', type: 'uint64' },
      { name: '_consumer', internalType: 'address', type: 'address' },
    ],
    name: 'removeConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_keyHash', internalType: 'bytes32', type: 'bytes32' },
      { name: '_subId', internalType: 'uint64', type: 'uint64' },
      {
        name: '_minimumRequestConfirmations',
        internalType: 'uint16',
        type: 'uint16',
      },
      { name: '_callbackGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: '_numWords', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'requestRandomWords',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint64', type: 'uint64' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'requestSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VRFCoordinatorV2_5Mock
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vrfCoordinatorV2_5MockAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_baseFee', internalType: 'uint96', type: 'uint96' },
      { name: '_gasPrice', internalType: 'uint96', type: 'uint96' },
      { name: '_weiPerUnitLink', internalType: 'int256', type: 'int256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'internalBalance', internalType: 'uint256', type: 'uint256' },
      { name: 'externalBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'BalanceInvariantViolated',
  },
  { type: 'error', inputs: [], name: 'FailedToSendNative' },
  { type: 'error', inputs: [], name: 'FailedToTransferLink' },
  { type: 'error', inputs: [], name: 'IndexOutOfRange' },
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InvalidCalldata' },
  {
    type: 'error',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'InvalidConsumer',
  },
  { type: 'error', inputs: [], name: 'InvalidExtraArgsTag' },
  { type: 'error', inputs: [], name: 'InvalidRandomWords' },
  { type: 'error', inputs: [], name: 'InvalidRequest' },
  { type: 'error', inputs: [], name: 'InvalidSubscription' },
  { type: 'error', inputs: [], name: 'LinkAlreadySet' },
  { type: 'error', inputs: [], name: 'LinkNotSet' },
  {
    type: 'error',
    inputs: [
      { name: 'proposedOwner', internalType: 'address', type: 'address' },
    ],
    name: 'MustBeRequestedOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'MustBeSubOwner',
  },
  { type: 'error', inputs: [], name: 'NotImplemented' },
  { type: 'error', inputs: [], name: 'OnlyCallableFromLink' },
  { type: 'error', inputs: [], name: 'PendingRequestExists' },
  { type: 'error', inputs: [], name: 'Reentrant' },
  { type: 'error', inputs: [], name: 'TooManyConsumers' },
  { type: 'event', anonymous: false, inputs: [], name: 'ConfigSet' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FundsRecovered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NativeFundsRecovered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'outputSeed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'payment',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
      {
        name: 'nativePayment',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
      { name: 'success', internalType: 'bool', type: 'bool', indexed: false },
      {
        name: 'onlyPremium',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'RandomWordsFulfilled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'keyHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'preSeed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'minimumRequestConfirmations',
        internalType: 'uint16',
        type: 'uint16',
        indexed: false,
      },
      {
        name: 'callbackGasLimit',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'numWords',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'extraArgs',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RandomWordsRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amountLink',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountNative',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SubscriptionCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'consumer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SubscriptionConsumerAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'consumer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SubscriptionConsumerRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SubscriptionCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'oldBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SubscriptionFunded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'oldNativeBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newNativeBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SubscriptionFundedWithNative',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'SubscriptionOwnerTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'SubscriptionOwnerTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'LINK',
    outputs: [
      {
        name: '',
        internalType: 'contract LinkTokenInterface',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'LINK_NATIVE_FEED',
    outputs: [
      {
        name: '',
        internalType: 'contract AggregatorV3Interface',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_CONSUMERS',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'acceptSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'addConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_subId', internalType: 'uint256', type: 'uint256' },
      { name: '_to', internalType: 'address', type: 'address' },
    ],
    name: 'cancelSubscription',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_subId', internalType: 'uint256', type: 'uint256' },
      { name: '_consumer', internalType: 'address', type: 'address' },
    ],
    name: 'consumerIsAdded',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'createSubscription',
    outputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_requestId', internalType: 'uint256', type: 'uint256' },
      { name: '_consumer', internalType: 'address', type: 'address' },
    ],
    name: 'fulfillRandomWords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_requestId', internalType: 'uint256', type: 'uint256' },
      { name: '_consumer', internalType: 'address', type: 'address' },
      { name: '_words', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'fulfillRandomWordsWithOverride',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_subId', internalType: 'uint256', type: 'uint256' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'fundSubscription',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'fundSubscriptionWithNative',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'maxCount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getActiveSubscriptionIds',
    outputs: [{ name: 'ids', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'getSubscription',
    outputs: [
      { name: 'balance', internalType: 'uint96', type: 'uint96' },
      { name: 'nativeBalance', internalType: 'uint96', type: 'uint96' },
      { name: 'reqCount', internalType: 'uint64', type: 'uint64' },
      { name: 'subOwner', internalType: 'address', type: 'address' },
      { name: 'consumers', internalType: 'address[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'i_base_fee',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'i_gas_price',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'i_wei_per_unit_link',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onTokenTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerCancelSubscription',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'pendingRequestExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'recoverFunds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address payable', type: 'address' }],
    name: 'recoverNativeFunds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_subId', internalType: 'uint256', type: 'uint256' },
      { name: '_consumer', internalType: 'address', type: 'address' },
    ],
    name: 'removeConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_req',
        internalType: 'struct VRFV2PlusClient.RandomWordsRequest',
        type: 'tuple',
        components: [
          { name: 'keyHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'subId', internalType: 'uint256', type: 'uint256' },
          {
            name: 'requestConfirmations',
            internalType: 'uint16',
            type: 'uint16',
          },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'numWords', internalType: 'uint32', type: 'uint32' },
          { name: 'extraArgs', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'requestRandomWords',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint256', type: 'uint256' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'requestSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 's_config',
    outputs: [
      {
        name: 'minimumRequestConfirmations',
        internalType: 'uint16',
        type: 'uint16',
      },
      { name: 'maxGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'reentrancyLock', internalType: 'bool', type: 'bool' },
      { name: 'stalenessSeconds', internalType: 'uint32', type: 'uint32' },
      {
        name: 'gasAfterPaymentCalculation',
        internalType: 'uint32',
        type: 'uint32',
      },
      {
        name: 'fulfillmentFlatFeeNativePPM',
        internalType: 'uint32',
        type: 'uint32',
      },
      {
        name: 'fulfillmentFlatFeeLinkDiscountPPM',
        internalType: 'uint32',
        type: 'uint32',
      },
      { name: 'nativePremiumPercentage', internalType: 'uint8', type: 'uint8' },
      { name: 'linkPremiumPercentage', internalType: 'uint8', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 's_currentSubNonce',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 's_totalBalance',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 's_totalNativeBalance',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'link', internalType: 'address', type: 'address' },
      { name: 'linkNativeFeed', internalType: 'address', type: 'address' },
    ],
    name: 'setLINKAndLINKNativeFeed',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address payable', type: 'address' },
    ],
    name: 'withdrawNative',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VRFV2PlusClient
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vrfv2PlusClientAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'EXTRA_ARGS_V1_TAG',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useReadCoinFlip = /*#__PURE__*/ createUseReadContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"MINIMUM_USD"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useReadCoinFlipGetPriceFeed = /*#__PURE__*/ createUseReadContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
  functionName: 'getPriceFeed',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"owner"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useReadCoinFlipOwner = /*#__PURE__*/ createUseReadContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"s_vrfCoordinator"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useReadCoinFlipSVrfCoordinator =
  /*#__PURE__*/ createUseReadContract({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    functionName: 's_vrfCoordinator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link coinFlipAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useWriteCoinFlip = /*#__PURE__*/ createUseWriteContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useWriteCoinFlipAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"flipCoin"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useWriteCoinFlipFlipCoin = /*#__PURE__*/ createUseWriteContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
  functionName: 'flipCoin',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"rawFulfillRandomWords"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useWriteCoinFlipRawFulfillRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"setCoordinator"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useWriteCoinFlipSetCoordinator =
  /*#__PURE__*/ createUseWriteContract({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    functionName: 'setCoordinator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useWriteCoinFlipTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link coinFlipAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useSimulateCoinFlip = /*#__PURE__*/ createUseSimulateContract({
  abi: coinFlipAbi,
  address: coinFlipAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useSimulateCoinFlipAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"flipCoin"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useSimulateCoinFlipFlipCoin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    functionName: 'flipCoin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"rawFulfillRandomWords"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useSimulateCoinFlipRawFulfillRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"setCoordinator"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useSimulateCoinFlipSetCoordinator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    functionName: 'setCoordinator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link coinFlipAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useSimulateCoinFlipTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link coinFlipAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useWatchCoinFlipEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: coinFlipAbi,
  address: coinFlipAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link coinFlipAbi}__ and `eventName` set to `"CoordinatorSet"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useWatchCoinFlipCoordinatorSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    eventName: 'CoordinatorSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link coinFlipAbi}__ and `eventName` set to `"Flipped"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useWatchCoinFlipFlippedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    eventName: 'Flipped',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link coinFlipAbi}__ and `eventName` set to `"Landed"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useWatchCoinFlipLandedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    eventName: 'Landed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link coinFlipAbi}__ and `eventName` set to `"OwnershipTransferRequested"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useWatchCoinFlipOwnershipTransferRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    eventName: 'OwnershipTransferRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link coinFlipAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x739b89d6CF2c665192D27797CF14DA501445591C)
 */
export const useWatchCoinFlipOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: coinFlipAbi,
    address: coinFlipAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link confirmedOwnerAbi}__
 */
export const useReadConfirmedOwner = /*#__PURE__*/ createUseReadContract({
  abi: confirmedOwnerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link confirmedOwnerAbi}__ and `functionName` set to `"owner"`
 */
export const useReadConfirmedOwnerOwner = /*#__PURE__*/ createUseReadContract({
  abi: confirmedOwnerAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link confirmedOwnerAbi}__
 */
export const useWriteConfirmedOwner = /*#__PURE__*/ createUseWriteContract({
  abi: confirmedOwnerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link confirmedOwnerAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useWriteConfirmedOwnerAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: confirmedOwnerAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link confirmedOwnerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteConfirmedOwnerTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: confirmedOwnerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link confirmedOwnerAbi}__
 */
export const useSimulateConfirmedOwner =
  /*#__PURE__*/ createUseSimulateContract({ abi: confirmedOwnerAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link confirmedOwnerAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useSimulateConfirmedOwnerAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: confirmedOwnerAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link confirmedOwnerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateConfirmedOwnerTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: confirmedOwnerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link confirmedOwnerAbi}__
 */
export const useWatchConfirmedOwnerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: confirmedOwnerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link confirmedOwnerAbi}__ and `eventName` set to `"OwnershipTransferRequested"`
 */
export const useWatchConfirmedOwnerOwnershipTransferRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: confirmedOwnerAbi,
    eventName: 'OwnershipTransferRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link confirmedOwnerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchConfirmedOwnerOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: confirmedOwnerAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link confirmedOwnerWithProposalAbi}__
 */
export const useReadConfirmedOwnerWithProposal =
  /*#__PURE__*/ createUseReadContract({ abi: confirmedOwnerWithProposalAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link confirmedOwnerWithProposalAbi}__ and `functionName` set to `"owner"`
 */
export const useReadConfirmedOwnerWithProposalOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: confirmedOwnerWithProposalAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link confirmedOwnerWithProposalAbi}__
 */
export const useWriteConfirmedOwnerWithProposal =
  /*#__PURE__*/ createUseWriteContract({ abi: confirmedOwnerWithProposalAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link confirmedOwnerWithProposalAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useWriteConfirmedOwnerWithProposalAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: confirmedOwnerWithProposalAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link confirmedOwnerWithProposalAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteConfirmedOwnerWithProposalTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: confirmedOwnerWithProposalAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link confirmedOwnerWithProposalAbi}__
 */
export const useSimulateConfirmedOwnerWithProposal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: confirmedOwnerWithProposalAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link confirmedOwnerWithProposalAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useSimulateConfirmedOwnerWithProposalAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: confirmedOwnerWithProposalAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link confirmedOwnerWithProposalAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateConfirmedOwnerWithProposalTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: confirmedOwnerWithProposalAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link confirmedOwnerWithProposalAbi}__
 */
export const useWatchConfirmedOwnerWithProposalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: confirmedOwnerWithProposalAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link confirmedOwnerWithProposalAbi}__ and `eventName` set to `"OwnershipTransferRequested"`
 */
export const useWatchConfirmedOwnerWithProposalOwnershipTransferRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: confirmedOwnerWithProposalAbi,
    eventName: 'OwnershipTransferRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link confirmedOwnerWithProposalAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchConfirmedOwnerWithProposalOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: confirmedOwnerWithProposalAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc677ReceiverAbi}__
 */
export const useWriteIerc677Receiver = /*#__PURE__*/ createUseWriteContract({
  abi: ierc677ReceiverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc677ReceiverAbi}__ and `functionName` set to `"onTokenTransfer"`
 */
export const useWriteIerc677ReceiverOnTokenTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc677ReceiverAbi,
    functionName: 'onTokenTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc677ReceiverAbi}__
 */
export const useSimulateIerc677Receiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc677ReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc677ReceiverAbi}__ and `functionName` set to `"onTokenTransfer"`
 */
export const useSimulateIerc677ReceiverOnTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc677ReceiverAbi,
    functionName: 'onTokenTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iOwnableAbi}__
 */
export const useWriteIOwnable = /*#__PURE__*/ createUseWriteContract({
  abi: iOwnableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iOwnableAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useWriteIOwnableAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: iOwnableAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iOwnableAbi}__ and `functionName` set to `"owner"`
 */
export const useWriteIOwnableOwner = /*#__PURE__*/ createUseWriteContract({
  abi: iOwnableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iOwnableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteIOwnableTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: iOwnableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iOwnableAbi}__
 */
export const useSimulateIOwnable = /*#__PURE__*/ createUseSimulateContract({
  abi: iOwnableAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iOwnableAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useSimulateIOwnableAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iOwnableAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iOwnableAbi}__ and `functionName` set to `"owner"`
 */
export const useSimulateIOwnableOwner = /*#__PURE__*/ createUseSimulateContract(
  { abi: iOwnableAbi, functionName: 'owner' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iOwnableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateIOwnableTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iOwnableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__
 */
export const useReadIvrfCoordinatorV2Plus = /*#__PURE__*/ createUseReadContract(
  { abi: ivrfCoordinatorV2PlusAbi },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"getActiveSubscriptionIds"`
 */
export const useReadIvrfCoordinatorV2PlusGetActiveSubscriptionIds =
  /*#__PURE__*/ createUseReadContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'getActiveSubscriptionIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"getSubscription"`
 */
export const useReadIvrfCoordinatorV2PlusGetSubscription =
  /*#__PURE__*/ createUseReadContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'getSubscription',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"pendingRequestExists"`
 */
export const useReadIvrfCoordinatorV2PlusPendingRequestExists =
  /*#__PURE__*/ createUseReadContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'pendingRequestExists',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__
 */
export const useWriteIvrfCoordinatorV2Plus =
  /*#__PURE__*/ createUseWriteContract({ abi: ivrfCoordinatorV2PlusAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"acceptSubscriptionOwnerTransfer"`
 */
export const useWriteIvrfCoordinatorV2PlusAcceptSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'acceptSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useWriteIvrfCoordinatorV2PlusAddConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useWriteIvrfCoordinatorV2PlusCancelSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useWriteIvrfCoordinatorV2PlusCreateSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"fundSubscriptionWithNative"`
 */
export const useWriteIvrfCoordinatorV2PlusFundSubscriptionWithNative =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'fundSubscriptionWithNative',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useWriteIvrfCoordinatorV2PlusRemoveConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"requestRandomWords"`
 */
export const useWriteIvrfCoordinatorV2PlusRequestRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'requestRandomWords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"requestSubscriptionOwnerTransfer"`
 */
export const useWriteIvrfCoordinatorV2PlusRequestSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'requestSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__
 */
export const useSimulateIvrfCoordinatorV2Plus =
  /*#__PURE__*/ createUseSimulateContract({ abi: ivrfCoordinatorV2PlusAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"acceptSubscriptionOwnerTransfer"`
 */
export const useSimulateIvrfCoordinatorV2PlusAcceptSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'acceptSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useSimulateIvrfCoordinatorV2PlusAddConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useSimulateIvrfCoordinatorV2PlusCancelSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useSimulateIvrfCoordinatorV2PlusCreateSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"fundSubscriptionWithNative"`
 */
export const useSimulateIvrfCoordinatorV2PlusFundSubscriptionWithNative =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'fundSubscriptionWithNative',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useSimulateIvrfCoordinatorV2PlusRemoveConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"requestRandomWords"`
 */
export const useSimulateIvrfCoordinatorV2PlusRequestRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'requestRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfCoordinatorV2PlusAbi}__ and `functionName` set to `"requestSubscriptionOwnerTransfer"`
 */
export const useSimulateIvrfCoordinatorV2PlusRequestSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfCoordinatorV2PlusAbi,
    functionName: 'requestSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfMigratableConsumerV2PlusAbi}__
 */
export const useWriteIvrfMigratableConsumerV2Plus =
  /*#__PURE__*/ createUseWriteContract({ abi: ivrfMigratableConsumerV2PlusAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfMigratableConsumerV2PlusAbi}__ and `functionName` set to `"setCoordinator"`
 */
export const useWriteIvrfMigratableConsumerV2PlusSetCoordinator =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfMigratableConsumerV2PlusAbi,
    functionName: 'setCoordinator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfMigratableConsumerV2PlusAbi}__
 */
export const useSimulateIvrfMigratableConsumerV2Plus =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfMigratableConsumerV2PlusAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfMigratableConsumerV2PlusAbi}__ and `functionName` set to `"setCoordinator"`
 */
export const useSimulateIvrfMigratableConsumerV2PlusSetCoordinator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfMigratableConsumerV2PlusAbi,
    functionName: 'setCoordinator',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ivrfMigratableConsumerV2PlusAbi}__
 */
export const useWatchIvrfMigratableConsumerV2PlusEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ivrfMigratableConsumerV2PlusAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ivrfMigratableConsumerV2PlusAbi}__ and `eventName` set to `"CoordinatorSet"`
 */
export const useWatchIvrfMigratableConsumerV2PlusCoordinatorSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ivrfMigratableConsumerV2PlusAbi,
    eventName: 'CoordinatorSet',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__
 */
export const useReadIvrfSubscriptionV2Plus =
  /*#__PURE__*/ createUseReadContract({ abi: ivrfSubscriptionV2PlusAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"getActiveSubscriptionIds"`
 */
export const useReadIvrfSubscriptionV2PlusGetActiveSubscriptionIds =
  /*#__PURE__*/ createUseReadContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'getActiveSubscriptionIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"getSubscription"`
 */
export const useReadIvrfSubscriptionV2PlusGetSubscription =
  /*#__PURE__*/ createUseReadContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'getSubscription',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"pendingRequestExists"`
 */
export const useReadIvrfSubscriptionV2PlusPendingRequestExists =
  /*#__PURE__*/ createUseReadContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'pendingRequestExists',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__
 */
export const useWriteIvrfSubscriptionV2Plus =
  /*#__PURE__*/ createUseWriteContract({ abi: ivrfSubscriptionV2PlusAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"acceptSubscriptionOwnerTransfer"`
 */
export const useWriteIvrfSubscriptionV2PlusAcceptSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'acceptSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useWriteIvrfSubscriptionV2PlusAddConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useWriteIvrfSubscriptionV2PlusCancelSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useWriteIvrfSubscriptionV2PlusCreateSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"fundSubscriptionWithNative"`
 */
export const useWriteIvrfSubscriptionV2PlusFundSubscriptionWithNative =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'fundSubscriptionWithNative',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useWriteIvrfSubscriptionV2PlusRemoveConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"requestSubscriptionOwnerTransfer"`
 */
export const useWriteIvrfSubscriptionV2PlusRequestSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'requestSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__
 */
export const useSimulateIvrfSubscriptionV2Plus =
  /*#__PURE__*/ createUseSimulateContract({ abi: ivrfSubscriptionV2PlusAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"acceptSubscriptionOwnerTransfer"`
 */
export const useSimulateIvrfSubscriptionV2PlusAcceptSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'acceptSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useSimulateIvrfSubscriptionV2PlusAddConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useSimulateIvrfSubscriptionV2PlusCancelSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useSimulateIvrfSubscriptionV2PlusCreateSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"fundSubscriptionWithNative"`
 */
export const useSimulateIvrfSubscriptionV2PlusFundSubscriptionWithNative =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'fundSubscriptionWithNative',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useSimulateIvrfSubscriptionV2PlusRemoveConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ivrfSubscriptionV2PlusAbi}__ and `functionName` set to `"requestSubscriptionOwnerTransfer"`
 */
export const useSimulateIvrfSubscriptionV2PlusRequestSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ivrfSubscriptionV2PlusAbi,
    functionName: 'requestSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__
 */
export const useReadLinkTokenInterface = /*#__PURE__*/ createUseReadContract({
  abi: linkTokenInterfaceAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadLinkTokenInterfaceAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadLinkTokenInterfaceBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadLinkTokenInterfaceDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"name"`
 */
export const useReadLinkTokenInterfaceName =
  /*#__PURE__*/ createUseReadContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'name',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadLinkTokenInterfaceSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadLinkTokenInterfaceTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__
 */
export const useWriteLinkTokenInterface = /*#__PURE__*/ createUseWriteContract({
  abi: linkTokenInterfaceAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteLinkTokenInterfaceApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"decreaseApproval"`
 */
export const useWriteLinkTokenInterfaceDecreaseApproval =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'decreaseApproval',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"increaseApproval"`
 */
export const useWriteLinkTokenInterfaceIncreaseApproval =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'increaseApproval',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteLinkTokenInterfaceTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"transferAndCall"`
 */
export const useWriteLinkTokenInterfaceTransferAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'transferAndCall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteLinkTokenInterfaceTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__
 */
export const useSimulateLinkTokenInterface =
  /*#__PURE__*/ createUseSimulateContract({ abi: linkTokenInterfaceAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateLinkTokenInterfaceApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"decreaseApproval"`
 */
export const useSimulateLinkTokenInterfaceDecreaseApproval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'decreaseApproval',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"increaseApproval"`
 */
export const useSimulateLinkTokenInterfaceIncreaseApproval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'increaseApproval',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateLinkTokenInterfaceTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"transferAndCall"`
 */
export const useSimulateLinkTokenInterfaceTransferAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'transferAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateLinkTokenInterfaceTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'transferFrom',
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

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link randomNumberConsumerV2Abi}__
 */
export const useReadRandomNumberConsumerV2 =
  /*#__PURE__*/ createUseReadContract({ abi: randomNumberConsumerV2Abi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link randomNumberConsumerV2Abi}__ and `functionName` set to `"s_randomWords"`
 */
export const useReadRandomNumberConsumerV2SRandomWords =
  /*#__PURE__*/ createUseReadContract({
    abi: randomNumberConsumerV2Abi,
    functionName: 's_randomWords',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link randomNumberConsumerV2Abi}__ and `functionName` set to `"s_requestId"`
 */
export const useReadRandomNumberConsumerV2SRequestId =
  /*#__PURE__*/ createUseReadContract({
    abi: randomNumberConsumerV2Abi,
    functionName: 's_requestId',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link randomNumberConsumerV2Abi}__
 */
export const useWriteRandomNumberConsumerV2 =
  /*#__PURE__*/ createUseWriteContract({ abi: randomNumberConsumerV2Abi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link randomNumberConsumerV2Abi}__ and `functionName` set to `"rawFulfillRandomWords"`
 */
export const useWriteRandomNumberConsumerV2RawFulfillRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: randomNumberConsumerV2Abi,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link randomNumberConsumerV2Abi}__ and `functionName` set to `"requestRandomWords"`
 */
export const useWriteRandomNumberConsumerV2RequestRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: randomNumberConsumerV2Abi,
    functionName: 'requestRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link randomNumberConsumerV2Abi}__
 */
export const useSimulateRandomNumberConsumerV2 =
  /*#__PURE__*/ createUseSimulateContract({ abi: randomNumberConsumerV2Abi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link randomNumberConsumerV2Abi}__ and `functionName` set to `"rawFulfillRandomWords"`
 */
export const useSimulateRandomNumberConsumerV2RawFulfillRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: randomNumberConsumerV2Abi,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link randomNumberConsumerV2Abi}__ and `functionName` set to `"requestRandomWords"`
 */
export const useSimulateRandomNumberConsumerV2RequestRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: randomNumberConsumerV2Abi,
    functionName: 'requestRandomWords',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link randomNumberConsumerV2Abi}__
 */
export const useWatchRandomNumberConsumerV2Event =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: randomNumberConsumerV2Abi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link randomNumberConsumerV2Abi}__ and `eventName` set to `"RequestSent"`
 */
export const useWatchRandomNumberConsumerV2RequestSentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: randomNumberConsumerV2Abi,
    eventName: 'RequestSent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link randomNumberConsumerV2Abi}__ and `eventName` set to `"ReturnedRandomness"`
 */
export const useWatchRandomNumberConsumerV2ReturnedRandomnessEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: randomNumberConsumerV2Abi,
    eventName: 'ReturnedRandomness',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link subscriptionApiAbi}__
 */
export const useReadSubscriptionApi = /*#__PURE__*/ createUseReadContract({
  abi: subscriptionApiAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"LINK"`
 */
export const useReadSubscriptionApiLink = /*#__PURE__*/ createUseReadContract({
  abi: subscriptionApiAbi,
  functionName: 'LINK',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"LINK_NATIVE_FEED"`
 */
export const useReadSubscriptionApiLinkNativeFeed =
  /*#__PURE__*/ createUseReadContract({
    abi: subscriptionApiAbi,
    functionName: 'LINK_NATIVE_FEED',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"MAX_CONSUMERS"`
 */
export const useReadSubscriptionApiMaxConsumers =
  /*#__PURE__*/ createUseReadContract({
    abi: subscriptionApiAbi,
    functionName: 'MAX_CONSUMERS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"getActiveSubscriptionIds"`
 */
export const useReadSubscriptionApiGetActiveSubscriptionIds =
  /*#__PURE__*/ createUseReadContract({
    abi: subscriptionApiAbi,
    functionName: 'getActiveSubscriptionIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"getSubscription"`
 */
export const useReadSubscriptionApiGetSubscription =
  /*#__PURE__*/ createUseReadContract({
    abi: subscriptionApiAbi,
    functionName: 'getSubscription',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"owner"`
 */
export const useReadSubscriptionApiOwner = /*#__PURE__*/ createUseReadContract({
  abi: subscriptionApiAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"pendingRequestExists"`
 */
export const useReadSubscriptionApiPendingRequestExists =
  /*#__PURE__*/ createUseReadContract({
    abi: subscriptionApiAbi,
    functionName: 'pendingRequestExists',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"s_config"`
 */
export const useReadSubscriptionApiSConfig =
  /*#__PURE__*/ createUseReadContract({
    abi: subscriptionApiAbi,
    functionName: 's_config',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"s_currentSubNonce"`
 */
export const useReadSubscriptionApiSCurrentSubNonce =
  /*#__PURE__*/ createUseReadContract({
    abi: subscriptionApiAbi,
    functionName: 's_currentSubNonce',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"s_totalBalance"`
 */
export const useReadSubscriptionApiSTotalBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: subscriptionApiAbi,
    functionName: 's_totalBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"s_totalNativeBalance"`
 */
export const useReadSubscriptionApiSTotalNativeBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: subscriptionApiAbi,
    functionName: 's_totalNativeBalance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__
 */
export const useWriteSubscriptionApi = /*#__PURE__*/ createUseWriteContract({
  abi: subscriptionApiAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useWriteSubscriptionApiAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"acceptSubscriptionOwnerTransfer"`
 */
export const useWriteSubscriptionApiAcceptSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'acceptSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useWriteSubscriptionApiAddConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useWriteSubscriptionApiCancelSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useWriteSubscriptionApiCreateSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"fundSubscriptionWithNative"`
 */
export const useWriteSubscriptionApiFundSubscriptionWithNative =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'fundSubscriptionWithNative',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"onTokenTransfer"`
 */
export const useWriteSubscriptionApiOnTokenTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'onTokenTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"ownerCancelSubscription"`
 */
export const useWriteSubscriptionApiOwnerCancelSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'ownerCancelSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"recoverFunds"`
 */
export const useWriteSubscriptionApiRecoverFunds =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'recoverFunds',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"recoverNativeFunds"`
 */
export const useWriteSubscriptionApiRecoverNativeFunds =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'recoverNativeFunds',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useWriteSubscriptionApiRemoveConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"requestSubscriptionOwnerTransfer"`
 */
export const useWriteSubscriptionApiRequestSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'requestSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"setLINKAndLINKNativeFeed"`
 */
export const useWriteSubscriptionApiSetLinkAndLinkNativeFeed =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'setLINKAndLINKNativeFeed',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteSubscriptionApiTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteSubscriptionApiWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"withdrawNative"`
 */
export const useWriteSubscriptionApiWithdrawNative =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionApiAbi,
    functionName: 'withdrawNative',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__
 */
export const useSimulateSubscriptionApi =
  /*#__PURE__*/ createUseSimulateContract({ abi: subscriptionApiAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useSimulateSubscriptionApiAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"acceptSubscriptionOwnerTransfer"`
 */
export const useSimulateSubscriptionApiAcceptSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'acceptSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useSimulateSubscriptionApiAddConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useSimulateSubscriptionApiCancelSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useSimulateSubscriptionApiCreateSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"fundSubscriptionWithNative"`
 */
export const useSimulateSubscriptionApiFundSubscriptionWithNative =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'fundSubscriptionWithNative',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"onTokenTransfer"`
 */
export const useSimulateSubscriptionApiOnTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'onTokenTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"ownerCancelSubscription"`
 */
export const useSimulateSubscriptionApiOwnerCancelSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'ownerCancelSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"recoverFunds"`
 */
export const useSimulateSubscriptionApiRecoverFunds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'recoverFunds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"recoverNativeFunds"`
 */
export const useSimulateSubscriptionApiRecoverNativeFunds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'recoverNativeFunds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useSimulateSubscriptionApiRemoveConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"requestSubscriptionOwnerTransfer"`
 */
export const useSimulateSubscriptionApiRequestSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'requestSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"setLINKAndLINKNativeFeed"`
 */
export const useSimulateSubscriptionApiSetLinkAndLinkNativeFeed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'setLINKAndLINKNativeFeed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateSubscriptionApiTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateSubscriptionApiWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionApiAbi}__ and `functionName` set to `"withdrawNative"`
 */
export const useSimulateSubscriptionApiWithdrawNative =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionApiAbi,
    functionName: 'withdrawNative',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link subscriptionApiAbi}__
 */
export const useWatchSubscriptionApiEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: subscriptionApiAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link subscriptionApiAbi}__ and `eventName` set to `"FundsRecovered"`
 */
export const useWatchSubscriptionApiFundsRecoveredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: subscriptionApiAbi,
    eventName: 'FundsRecovered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link subscriptionApiAbi}__ and `eventName` set to `"NativeFundsRecovered"`
 */
export const useWatchSubscriptionApiNativeFundsRecoveredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: subscriptionApiAbi,
    eventName: 'NativeFundsRecovered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link subscriptionApiAbi}__ and `eventName` set to `"OwnershipTransferRequested"`
 */
export const useWatchSubscriptionApiOwnershipTransferRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: subscriptionApiAbi,
    eventName: 'OwnershipTransferRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link subscriptionApiAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchSubscriptionApiOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: subscriptionApiAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link subscriptionApiAbi}__ and `eventName` set to `"SubscriptionCanceled"`
 */
export const useWatchSubscriptionApiSubscriptionCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: subscriptionApiAbi,
    eventName: 'SubscriptionCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link subscriptionApiAbi}__ and `eventName` set to `"SubscriptionConsumerAdded"`
 */
export const useWatchSubscriptionApiSubscriptionConsumerAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: subscriptionApiAbi,
    eventName: 'SubscriptionConsumerAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link subscriptionApiAbi}__ and `eventName` set to `"SubscriptionConsumerRemoved"`
 */
export const useWatchSubscriptionApiSubscriptionConsumerRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: subscriptionApiAbi,
    eventName: 'SubscriptionConsumerRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link subscriptionApiAbi}__ and `eventName` set to `"SubscriptionCreated"`
 */
export const useWatchSubscriptionApiSubscriptionCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: subscriptionApiAbi,
    eventName: 'SubscriptionCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link subscriptionApiAbi}__ and `eventName` set to `"SubscriptionFunded"`
 */
export const useWatchSubscriptionApiSubscriptionFundedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: subscriptionApiAbi,
    eventName: 'SubscriptionFunded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link subscriptionApiAbi}__ and `eventName` set to `"SubscriptionFundedWithNative"`
 */
export const useWatchSubscriptionApiSubscriptionFundedWithNativeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: subscriptionApiAbi,
    eventName: 'SubscriptionFundedWithNative',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link subscriptionApiAbi}__ and `eventName` set to `"SubscriptionOwnerTransferRequested"`
 */
export const useWatchSubscriptionApiSubscriptionOwnerTransferRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: subscriptionApiAbi,
    eventName: 'SubscriptionOwnerTransferRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link subscriptionApiAbi}__ and `eventName` set to `"SubscriptionOwnerTransferred"`
 */
export const useWatchSubscriptionApiSubscriptionOwnerTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: subscriptionApiAbi,
    eventName: 'SubscriptionOwnerTransferred',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfConsumerBaseV2Abi}__
 */
export const useWriteVrfConsumerBaseV2 = /*#__PURE__*/ createUseWriteContract({
  abi: vrfConsumerBaseV2Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfConsumerBaseV2Abi}__ and `functionName` set to `"rawFulfillRandomWords"`
 */
export const useWriteVrfConsumerBaseV2RawFulfillRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfConsumerBaseV2Abi,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfConsumerBaseV2Abi}__
 */
export const useSimulateVrfConsumerBaseV2 =
  /*#__PURE__*/ createUseSimulateContract({ abi: vrfConsumerBaseV2Abi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfConsumerBaseV2Abi}__ and `functionName` set to `"rawFulfillRandomWords"`
 */
export const useSimulateVrfConsumerBaseV2RawFulfillRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfConsumerBaseV2Abi,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__
 */
export const useReadVrfConsumerBaseV2Plus = /*#__PURE__*/ createUseReadContract(
  { abi: vrfConsumerBaseV2PlusAbi },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__ and `functionName` set to `"owner"`
 */
export const useReadVrfConsumerBaseV2PlusOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfConsumerBaseV2PlusAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__ and `functionName` set to `"s_vrfCoordinator"`
 */
export const useReadVrfConsumerBaseV2PlusSVrfCoordinator =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfConsumerBaseV2PlusAbi,
    functionName: 's_vrfCoordinator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__
 */
export const useWriteVrfConsumerBaseV2Plus =
  /*#__PURE__*/ createUseWriteContract({ abi: vrfConsumerBaseV2PlusAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useWriteVrfConsumerBaseV2PlusAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfConsumerBaseV2PlusAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__ and `functionName` set to `"rawFulfillRandomWords"`
 */
export const useWriteVrfConsumerBaseV2PlusRawFulfillRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfConsumerBaseV2PlusAbi,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__ and `functionName` set to `"setCoordinator"`
 */
export const useWriteVrfConsumerBaseV2PlusSetCoordinator =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfConsumerBaseV2PlusAbi,
    functionName: 'setCoordinator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteVrfConsumerBaseV2PlusTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfConsumerBaseV2PlusAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__
 */
export const useSimulateVrfConsumerBaseV2Plus =
  /*#__PURE__*/ createUseSimulateContract({ abi: vrfConsumerBaseV2PlusAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useSimulateVrfConsumerBaseV2PlusAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfConsumerBaseV2PlusAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__ and `functionName` set to `"rawFulfillRandomWords"`
 */
export const useSimulateVrfConsumerBaseV2PlusRawFulfillRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfConsumerBaseV2PlusAbi,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__ and `functionName` set to `"setCoordinator"`
 */
export const useSimulateVrfConsumerBaseV2PlusSetCoordinator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfConsumerBaseV2PlusAbi,
    functionName: 'setCoordinator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateVrfConsumerBaseV2PlusTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfConsumerBaseV2PlusAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__
 */
export const useWatchVrfConsumerBaseV2PlusEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: vrfConsumerBaseV2PlusAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__ and `eventName` set to `"CoordinatorSet"`
 */
export const useWatchVrfConsumerBaseV2PlusCoordinatorSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfConsumerBaseV2PlusAbi,
    eventName: 'CoordinatorSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__ and `eventName` set to `"OwnershipTransferRequested"`
 */
export const useWatchVrfConsumerBaseV2PlusOwnershipTransferRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfConsumerBaseV2PlusAbi,
    eventName: 'OwnershipTransferRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfConsumerBaseV2PlusAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchVrfConsumerBaseV2PlusOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfConsumerBaseV2PlusAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__
 */
export const useReadVrfCoordinatorV2Interface =
  /*#__PURE__*/ createUseReadContract({ abi: vrfCoordinatorV2InterfaceAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"getRequestConfig"`
 */
export const useReadVrfCoordinatorV2InterfaceGetRequestConfig =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'getRequestConfig',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"getSubscription"`
 */
export const useReadVrfCoordinatorV2InterfaceGetSubscription =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'getSubscription',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"pendingRequestExists"`
 */
export const useReadVrfCoordinatorV2InterfacePendingRequestExists =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'pendingRequestExists',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__
 */
export const useWriteVrfCoordinatorV2Interface =
  /*#__PURE__*/ createUseWriteContract({ abi: vrfCoordinatorV2InterfaceAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"acceptSubscriptionOwnerTransfer"`
 */
export const useWriteVrfCoordinatorV2InterfaceAcceptSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'acceptSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useWriteVrfCoordinatorV2InterfaceAddConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useWriteVrfCoordinatorV2InterfaceCancelSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useWriteVrfCoordinatorV2InterfaceCreateSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useWriteVrfCoordinatorV2InterfaceRemoveConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"requestRandomWords"`
 */
export const useWriteVrfCoordinatorV2InterfaceRequestRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'requestRandomWords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"requestSubscriptionOwnerTransfer"`
 */
export const useWriteVrfCoordinatorV2InterfaceRequestSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'requestSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__
 */
export const useSimulateVrfCoordinatorV2Interface =
  /*#__PURE__*/ createUseSimulateContract({ abi: vrfCoordinatorV2InterfaceAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"acceptSubscriptionOwnerTransfer"`
 */
export const useSimulateVrfCoordinatorV2InterfaceAcceptSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'acceptSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useSimulateVrfCoordinatorV2InterfaceAddConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useSimulateVrfCoordinatorV2InterfaceCancelSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useSimulateVrfCoordinatorV2InterfaceCreateSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useSimulateVrfCoordinatorV2InterfaceRemoveConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"requestRandomWords"`
 */
export const useSimulateVrfCoordinatorV2InterfaceRequestRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'requestRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"requestSubscriptionOwnerTransfer"`
 */
export const useSimulateVrfCoordinatorV2InterfaceRequestSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'requestSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__
 */
export const useReadVrfCoordinatorV2Mock = /*#__PURE__*/ createUseReadContract({
  abi: vrfCoordinatorV2MockAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"BASE_FEE"`
 */
export const useReadVrfCoordinatorV2MockBaseFee =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'BASE_FEE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"GAS_PRICE_LINK"`
 */
export const useReadVrfCoordinatorV2MockGasPriceLink =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'GAS_PRICE_LINK',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"MAX_CONSUMERS"`
 */
export const useReadVrfCoordinatorV2MockMaxConsumers =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'MAX_CONSUMERS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"acceptSubscriptionOwnerTransfer"`
 */
export const useReadVrfCoordinatorV2MockAcceptSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'acceptSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"consumerIsAdded"`
 */
export const useReadVrfCoordinatorV2MockConsumerIsAdded =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'consumerIsAdded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"getConfig"`
 */
export const useReadVrfCoordinatorV2MockGetConfig =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'getConfig',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"getFallbackWeiPerUnitLink"`
 */
export const useReadVrfCoordinatorV2MockGetFallbackWeiPerUnitLink =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'getFallbackWeiPerUnitLink',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"getFeeConfig"`
 */
export const useReadVrfCoordinatorV2MockGetFeeConfig =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'getFeeConfig',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"getRequestConfig"`
 */
export const useReadVrfCoordinatorV2MockGetRequestConfig =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'getRequestConfig',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"getSubscription"`
 */
export const useReadVrfCoordinatorV2MockGetSubscription =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'getSubscription',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"owner"`
 */
export const useReadVrfCoordinatorV2MockOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"pendingRequestExists"`
 */
export const useReadVrfCoordinatorV2MockPendingRequestExists =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'pendingRequestExists',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"requestSubscriptionOwnerTransfer"`
 */
export const useReadVrfCoordinatorV2MockRequestSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'requestSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__
 */
export const useWriteVrfCoordinatorV2Mock =
  /*#__PURE__*/ createUseWriteContract({ abi: vrfCoordinatorV2MockAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useWriteVrfCoordinatorV2MockAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useWriteVrfCoordinatorV2MockAddConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useWriteVrfCoordinatorV2MockCancelSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useWriteVrfCoordinatorV2MockCreateSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"fulfillRandomWords"`
 */
export const useWriteVrfCoordinatorV2MockFulfillRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'fulfillRandomWords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"fulfillRandomWordsWithOverride"`
 */
export const useWriteVrfCoordinatorV2MockFulfillRandomWordsWithOverride =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'fulfillRandomWordsWithOverride',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"fundSubscription"`
 */
export const useWriteVrfCoordinatorV2MockFundSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'fundSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useWriteVrfCoordinatorV2MockRemoveConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"requestRandomWords"`
 */
export const useWriteVrfCoordinatorV2MockRequestRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'requestRandomWords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"setConfig"`
 */
export const useWriteVrfCoordinatorV2MockSetConfig =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'setConfig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteVrfCoordinatorV2MockTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__
 */
export const useSimulateVrfCoordinatorV2Mock =
  /*#__PURE__*/ createUseSimulateContract({ abi: vrfCoordinatorV2MockAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useSimulateVrfCoordinatorV2MockAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useSimulateVrfCoordinatorV2MockAddConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useSimulateVrfCoordinatorV2MockCancelSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useSimulateVrfCoordinatorV2MockCreateSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"fulfillRandomWords"`
 */
export const useSimulateVrfCoordinatorV2MockFulfillRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'fulfillRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"fulfillRandomWordsWithOverride"`
 */
export const useSimulateVrfCoordinatorV2MockFulfillRandomWordsWithOverride =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'fulfillRandomWordsWithOverride',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"fundSubscription"`
 */
export const useSimulateVrfCoordinatorV2MockFundSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'fundSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useSimulateVrfCoordinatorV2MockRemoveConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"requestRandomWords"`
 */
export const useSimulateVrfCoordinatorV2MockRequestRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'requestRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"setConfig"`
 */
export const useSimulateVrfCoordinatorV2MockSetConfig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'setConfig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateVrfCoordinatorV2MockTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__
 */
export const useWatchVrfCoordinatorV2MockEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: vrfCoordinatorV2MockAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"ConfigSet"`
 */
export const useWatchVrfCoordinatorV2MockConfigSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'ConfigSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"ConsumerAdded"`
 */
export const useWatchVrfCoordinatorV2MockConsumerAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'ConsumerAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"ConsumerRemoved"`
 */
export const useWatchVrfCoordinatorV2MockConsumerRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'ConsumerRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"OwnershipTransferRequested"`
 */
export const useWatchVrfCoordinatorV2MockOwnershipTransferRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'OwnershipTransferRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchVrfCoordinatorV2MockOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"RandomWordsFulfilled"`
 */
export const useWatchVrfCoordinatorV2MockRandomWordsFulfilledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'RandomWordsFulfilled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"RandomWordsRequested"`
 */
export const useWatchVrfCoordinatorV2MockRandomWordsRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'RandomWordsRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"SubscriptionCanceled"`
 */
export const useWatchVrfCoordinatorV2MockSubscriptionCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'SubscriptionCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"SubscriptionCreated"`
 */
export const useWatchVrfCoordinatorV2MockSubscriptionCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'SubscriptionCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"SubscriptionFunded"`
 */
export const useWatchVrfCoordinatorV2MockSubscriptionFundedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'SubscriptionFunded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__
 */
export const useReadVrfCoordinatorV2_5Mock =
  /*#__PURE__*/ createUseReadContract({ abi: vrfCoordinatorV2_5MockAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"LINK"`
 */
export const useReadVrfCoordinatorV2_5MockLink =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'LINK',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"LINK_NATIVE_FEED"`
 */
export const useReadVrfCoordinatorV2_5MockLinkNativeFeed =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'LINK_NATIVE_FEED',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"MAX_CONSUMERS"`
 */
export const useReadVrfCoordinatorV2_5MockMaxConsumers =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'MAX_CONSUMERS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"consumerIsAdded"`
 */
export const useReadVrfCoordinatorV2_5MockConsumerIsAdded =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'consumerIsAdded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"getActiveSubscriptionIds"`
 */
export const useReadVrfCoordinatorV2_5MockGetActiveSubscriptionIds =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'getActiveSubscriptionIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"getSubscription"`
 */
export const useReadVrfCoordinatorV2_5MockGetSubscription =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'getSubscription',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"i_base_fee"`
 */
export const useReadVrfCoordinatorV2_5MockIBaseFee =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'i_base_fee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"i_gas_price"`
 */
export const useReadVrfCoordinatorV2_5MockIGasPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'i_gas_price',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"i_wei_per_unit_link"`
 */
export const useReadVrfCoordinatorV2_5MockIWeiPerUnitLink =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'i_wei_per_unit_link',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"owner"`
 */
export const useReadVrfCoordinatorV2_5MockOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"pendingRequestExists"`
 */
export const useReadVrfCoordinatorV2_5MockPendingRequestExists =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'pendingRequestExists',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"s_config"`
 */
export const useReadVrfCoordinatorV2_5MockSConfig =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 's_config',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"s_currentSubNonce"`
 */
export const useReadVrfCoordinatorV2_5MockSCurrentSubNonce =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 's_currentSubNonce',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"s_totalBalance"`
 */
export const useReadVrfCoordinatorV2_5MockSTotalBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 's_totalBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"s_totalNativeBalance"`
 */
export const useReadVrfCoordinatorV2_5MockSTotalNativeBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 's_totalNativeBalance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__
 */
export const useWriteVrfCoordinatorV2_5Mock =
  /*#__PURE__*/ createUseWriteContract({ abi: vrfCoordinatorV2_5MockAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useWriteVrfCoordinatorV2_5MockAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"acceptSubscriptionOwnerTransfer"`
 */
export const useWriteVrfCoordinatorV2_5MockAcceptSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'acceptSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useWriteVrfCoordinatorV2_5MockAddConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useWriteVrfCoordinatorV2_5MockCancelSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useWriteVrfCoordinatorV2_5MockCreateSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"fulfillRandomWords"`
 */
export const useWriteVrfCoordinatorV2_5MockFulfillRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'fulfillRandomWords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"fulfillRandomWordsWithOverride"`
 */
export const useWriteVrfCoordinatorV2_5MockFulfillRandomWordsWithOverride =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'fulfillRandomWordsWithOverride',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"fundSubscription"`
 */
export const useWriteVrfCoordinatorV2_5MockFundSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'fundSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"fundSubscriptionWithNative"`
 */
export const useWriteVrfCoordinatorV2_5MockFundSubscriptionWithNative =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'fundSubscriptionWithNative',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"onTokenTransfer"`
 */
export const useWriteVrfCoordinatorV2_5MockOnTokenTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'onTokenTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"ownerCancelSubscription"`
 */
export const useWriteVrfCoordinatorV2_5MockOwnerCancelSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'ownerCancelSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"recoverFunds"`
 */
export const useWriteVrfCoordinatorV2_5MockRecoverFunds =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'recoverFunds',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"recoverNativeFunds"`
 */
export const useWriteVrfCoordinatorV2_5MockRecoverNativeFunds =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'recoverNativeFunds',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useWriteVrfCoordinatorV2_5MockRemoveConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"requestRandomWords"`
 */
export const useWriteVrfCoordinatorV2_5MockRequestRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'requestRandomWords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"requestSubscriptionOwnerTransfer"`
 */
export const useWriteVrfCoordinatorV2_5MockRequestSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'requestSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"setConfig"`
 */
export const useWriteVrfCoordinatorV2_5MockSetConfig =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'setConfig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"setLINKAndLINKNativeFeed"`
 */
export const useWriteVrfCoordinatorV2_5MockSetLinkAndLinkNativeFeed =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'setLINKAndLINKNativeFeed',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteVrfCoordinatorV2_5MockTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteVrfCoordinatorV2_5MockWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"withdrawNative"`
 */
export const useWriteVrfCoordinatorV2_5MockWithdrawNative =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'withdrawNative',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__
 */
export const useSimulateVrfCoordinatorV2_5Mock =
  /*#__PURE__*/ createUseSimulateContract({ abi: vrfCoordinatorV2_5MockAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useSimulateVrfCoordinatorV2_5MockAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"acceptSubscriptionOwnerTransfer"`
 */
export const useSimulateVrfCoordinatorV2_5MockAcceptSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'acceptSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useSimulateVrfCoordinatorV2_5MockAddConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useSimulateVrfCoordinatorV2_5MockCancelSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useSimulateVrfCoordinatorV2_5MockCreateSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"fulfillRandomWords"`
 */
export const useSimulateVrfCoordinatorV2_5MockFulfillRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'fulfillRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"fulfillRandomWordsWithOverride"`
 */
export const useSimulateVrfCoordinatorV2_5MockFulfillRandomWordsWithOverride =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'fulfillRandomWordsWithOverride',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"fundSubscription"`
 */
export const useSimulateVrfCoordinatorV2_5MockFundSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'fundSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"fundSubscriptionWithNative"`
 */
export const useSimulateVrfCoordinatorV2_5MockFundSubscriptionWithNative =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'fundSubscriptionWithNative',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"onTokenTransfer"`
 */
export const useSimulateVrfCoordinatorV2_5MockOnTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'onTokenTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"ownerCancelSubscription"`
 */
export const useSimulateVrfCoordinatorV2_5MockOwnerCancelSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'ownerCancelSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"recoverFunds"`
 */
export const useSimulateVrfCoordinatorV2_5MockRecoverFunds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'recoverFunds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"recoverNativeFunds"`
 */
export const useSimulateVrfCoordinatorV2_5MockRecoverNativeFunds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'recoverNativeFunds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useSimulateVrfCoordinatorV2_5MockRemoveConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"requestRandomWords"`
 */
export const useSimulateVrfCoordinatorV2_5MockRequestRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'requestRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"requestSubscriptionOwnerTransfer"`
 */
export const useSimulateVrfCoordinatorV2_5MockRequestSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'requestSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"setConfig"`
 */
export const useSimulateVrfCoordinatorV2_5MockSetConfig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'setConfig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"setLINKAndLINKNativeFeed"`
 */
export const useSimulateVrfCoordinatorV2_5MockSetLinkAndLinkNativeFeed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'setLINKAndLINKNativeFeed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateVrfCoordinatorV2_5MockTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateVrfCoordinatorV2_5MockWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `functionName` set to `"withdrawNative"`
 */
export const useSimulateVrfCoordinatorV2_5MockWithdrawNative =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2_5MockAbi,
    functionName: 'withdrawNative',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__
 */
export const useWatchVrfCoordinatorV2_5MockEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: vrfCoordinatorV2_5MockAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `eventName` set to `"ConfigSet"`
 */
export const useWatchVrfCoordinatorV2_5MockConfigSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2_5MockAbi,
    eventName: 'ConfigSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `eventName` set to `"FundsRecovered"`
 */
export const useWatchVrfCoordinatorV2_5MockFundsRecoveredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2_5MockAbi,
    eventName: 'FundsRecovered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `eventName` set to `"NativeFundsRecovered"`
 */
export const useWatchVrfCoordinatorV2_5MockNativeFundsRecoveredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2_5MockAbi,
    eventName: 'NativeFundsRecovered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `eventName` set to `"OwnershipTransferRequested"`
 */
export const useWatchVrfCoordinatorV2_5MockOwnershipTransferRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2_5MockAbi,
    eventName: 'OwnershipTransferRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchVrfCoordinatorV2_5MockOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2_5MockAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `eventName` set to `"RandomWordsFulfilled"`
 */
export const useWatchVrfCoordinatorV2_5MockRandomWordsFulfilledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2_5MockAbi,
    eventName: 'RandomWordsFulfilled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `eventName` set to `"RandomWordsRequested"`
 */
export const useWatchVrfCoordinatorV2_5MockRandomWordsRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2_5MockAbi,
    eventName: 'RandomWordsRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `eventName` set to `"SubscriptionCanceled"`
 */
export const useWatchVrfCoordinatorV2_5MockSubscriptionCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2_5MockAbi,
    eventName: 'SubscriptionCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `eventName` set to `"SubscriptionConsumerAdded"`
 */
export const useWatchVrfCoordinatorV2_5MockSubscriptionConsumerAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2_5MockAbi,
    eventName: 'SubscriptionConsumerAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `eventName` set to `"SubscriptionConsumerRemoved"`
 */
export const useWatchVrfCoordinatorV2_5MockSubscriptionConsumerRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2_5MockAbi,
    eventName: 'SubscriptionConsumerRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `eventName` set to `"SubscriptionCreated"`
 */
export const useWatchVrfCoordinatorV2_5MockSubscriptionCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2_5MockAbi,
    eventName: 'SubscriptionCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `eventName` set to `"SubscriptionFunded"`
 */
export const useWatchVrfCoordinatorV2_5MockSubscriptionFundedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2_5MockAbi,
    eventName: 'SubscriptionFunded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `eventName` set to `"SubscriptionFundedWithNative"`
 */
export const useWatchVrfCoordinatorV2_5MockSubscriptionFundedWithNativeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2_5MockAbi,
    eventName: 'SubscriptionFundedWithNative',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `eventName` set to `"SubscriptionOwnerTransferRequested"`
 */
export const useWatchVrfCoordinatorV2_5MockSubscriptionOwnerTransferRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2_5MockAbi,
    eventName: 'SubscriptionOwnerTransferRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2_5MockAbi}__ and `eventName` set to `"SubscriptionOwnerTransferred"`
 */
export const useWatchVrfCoordinatorV2_5MockSubscriptionOwnerTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2_5MockAbi,
    eventName: 'SubscriptionOwnerTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfv2PlusClientAbi}__
 */
export const useReadVrfv2PlusClient = /*#__PURE__*/ createUseReadContract({
  abi: vrfv2PlusClientAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfv2PlusClientAbi}__ and `functionName` set to `"EXTRA_ARGS_V1_TAG"`
 */
export const useReadVrfv2PlusClientExtraArgsV1Tag =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfv2PlusClientAbi,
    functionName: 'EXTRA_ARGS_V1_TAG',
  })
