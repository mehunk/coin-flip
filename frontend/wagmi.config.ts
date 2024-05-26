import { defineConfig } from '@wagmi/cli'

import { hardhat, react } from '@wagmi/cli/plugins'

const HARDHAT_CONTRACT_ADDRESS = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
const SEPOLIA_CONTRACT_ADDRESS = '0xa4Dc3bEB2A6Ed22906AaBfa9f808882bBF3EBD34'

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    hardhat({
      project: '../',
      deployments: {
        CoinFlip: {
          31337: HARDHAT_CONTRACT_ADDRESS,
          11155111: SEPOLIA_CONTRACT_ADDRESS,
        },
      },
    }),
    react(),
  ],
})
