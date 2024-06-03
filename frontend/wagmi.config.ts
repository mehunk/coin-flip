import { defineConfig } from '@wagmi/cli'

import { hardhat, react } from '@wagmi/cli/plugins'

const HARDHAT_CONTRACT_ADDRESS = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
const SEPOLIA_CONTRACT_ADDRESS = '0x739b89d6CF2c665192D27797CF14DA501445591C'

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
