import { defineConfig } from '@wagmi/cli'

import { hardhat, react } from '@wagmi/cli/plugins'

const HARDHAT_CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    hardhat({
      project: '../',
      deployments: {
        CoinFlip: {
          31337: HARDHAT_CONTRACT_ADDRESS,
        },
      },
    }),
    react(),
  ],
})