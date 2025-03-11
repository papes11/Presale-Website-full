import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { WalletContextProvider } from "@/components/WalletProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "presale coin | MemeDog Best Crypto Memecoin - 2025",
  description: "presale coin the Cowardly Coin is meme-focused on surviving the wildest market swings. No panic like presale coin. No selling. Just 100% HODL Power, ready to weather any storm!",
  icons: {
    icon: "/ru.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WalletContextProvider>{children}</WalletContextProvider>
      </body>
    </html>
  );
}
