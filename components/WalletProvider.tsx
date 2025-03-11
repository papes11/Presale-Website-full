"use client"; // Needed for hooks in Next.js

import { FC, useMemo, useEffect } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css"; // Import default styles


export const WalletContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const network = clusterApiUrl("mainnet-beta");

  // Memoize the wallets array
  const wallets = useMemo(() => {
    const phantomWallet = new PhantomWalletAdapter();
    console.log("Initializing Phantom Wallet:", phantomWallet);
    return [phantomWallet];
  }, []);

  useEffect(() => {
    console.log("Wallets available:", wallets); // Log wallet list on component mount
  }, [wallets]);

  return (
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
          
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
