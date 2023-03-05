'use client'

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { optimismGoerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Exchange from '../components/exchange'

const { chains, provider } = configureChains(
  [optimismGoerli],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'NST Demo',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function Home() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <main className="h-screen w-screen flex justify-center" >
          <h1 className="fixed top-3 left-3 text-3xl font-semibold text-white">NST Demo</h1>
          <div className="fixed top-3 right-3">
            <ConnectButton />
          </div>
          <Exchange />
        </main >
      </RainbowKitProvider>
    </WagmiConfig >
  )
}
