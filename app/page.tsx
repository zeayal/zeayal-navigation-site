'use client'

import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'
import Header from '@/components/header'


const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  }),
})


export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center">
      <WagmiConfig config={config}>
        <Header />
      </WagmiConfig>
    </main>

  )
}
