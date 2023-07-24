"use client";

import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { IconContext } from "react-icons";
import { createPublicClient, http } from "viem";
import Header from "@/components/header";
import HomeContent from "@/components/home-content";
import Head from "next/head";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <IconContext.Provider
        value={{ }}
      >
        <WagmiConfig config={config}>
          <Header />
          <HomeContent />
        </WagmiConfig>
      </IconContext.Provider>
    </main>
  );
}
