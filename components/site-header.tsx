"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { useWallet } from "@solana/wallet-adapter-react";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { connected, publicKey } = useWallet();

  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full p-4 md:p-10">
      {/* Blurry Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)} // Close menu when clicking outside
        />
      )}

      <div className="mx-auto max-w-full md:max-w-6xl mt-2 pb-2 bg-[#2A2B35] rounded-full border-2 border-black shadow-[0_0_20px_rgba(255,58,140,0.3)]">
        {!isMenuOpen ? (
          <div className="flex h-14 items-center justify-between mr-5">
            <Link href="/" className="flex items-center mr-11 -space-x-10">
              <Image
                src="/log.png"
                alt="presale coin Logo"
                width={200}
                height={200}
                className="rounded-full drop-shadow-[0_0_8px_rgba(255,58,140,0.5)]"
              />
              <span
                className="text-xl text-ghost-pink animate-pulse md:text-2xl lg:text-3xl xl:text-4xl font-bold mr-2 md:inline"
                style={{ textShadow: "1px 1px 0 #000, 0 0 10px #E6E7FF" }}
              >
                presale coin
              </span>
            </Link>
            <div className="flex items-center space-x-3 ml-2 me-2 md:hidden">
              <a
                href="https://en.wikipedia.org/wiki/presale coin_the_Cowardly_Dog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/usa.png"
                  alt="usa"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </a>
              <Button className="bg-[#FF3A8C] hover:bg-[#FF1493] text-white rounded-full px-6 py-2 text-sm font-bold border-2 border-black shadow-[2px_2px_0_0_#000] transition-all hover:translate-y-1 hover:shadow-[1px_1px_0_0_#000] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-pink-400/30 to-pink-400/0 group-hover:translate-x-full duration-700 transition-transform" />
                <span className="relative">Buy</span>
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-[#E6E7FF]"
              aria-label="Open menu"
            >
              <Menu className="h-16 w-16" />
            </Button>
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: "Home", id: "home" },
                { name: "Burn Vesting", id: "burn-vesting" },
                { name: "Whitepaper", id: "whitepaper" },
                { name: "FAQs", id: "faqs" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#E6E7FF] hover:text-[#FF3A8C] font-bold transition-colors duration-300"
                  style={{ textShadow: "1px 1px 0 #000" }}
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="hidden md:flex items-center space-x-3" aria-label="Social Media Links">
              <a
                href="https://en.wikipedia.org/wiki/presale coin_the_Cowardly_Dog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/usa.png"
                  alt="usa"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/twitter.png"
                  alt="Twitter"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </a>
              <a
                href="https://t.me/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/telegram.png"
                  alt="Telegram"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </a>
              <WalletMultiButton
                style={{
                  backgroundColor: "#FF3A8C",
                  color: "white",
                  borderRadius: "9999px",
                  padding: "0.5rem 1.5rem",
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  border: "2px solid black",
                  boxShadow: "2px 2px 0 0 #000",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                className="relative group"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-pink-400/30 to-pink-400/0 group-hover:translate-x-full duration-700 transition-transform"
                />
                {connected ? (
                  `${publicKey?.toBase58().slice(0, 6)}...${publicKey?.toBase58().slice(-4)}`
                ) : (
                  "Connect Wallet"
                )}
              </WalletMultiButton>
            </div>
          </div>
        ) : (
          <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#2A2B35] rounded-none border-2 border-black shadow-[0_0_20px_rgba(255,58,140,0.3)]"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-8 top-8 text-[#E6E7FF]"
              aria-label="Close menu"
            >
              <X className="h-20 w-20 text-ghost-pink animate-pulse" />
            </Button>
            {/* Wallet Button at the Top */}
            <WalletMultiButton
              style={{
                backgroundColor: "#FF3A8C",
                color: "white",
                borderRadius: "9999px",
                padding: "0.5rem 1.5rem",
                fontSize: "0.875rem",
                fontWeight: "bold",
                border: "2px solid black",
                boxShadow: "2px 2px 0 0 #000",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
              className="relative group mb-6" 
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-pink-400/30 to-pink-400/0 group-hover:translate-x-full duration-700 transition-transform"
              />
              {connected ? (
                `${publicKey?.toBase58().slice(0, 6)}...${publicKey?.toBase58().slice(-4)}`
              ) : (
                "Connect Wallet"
              )}
            </WalletMultiButton>
            {/* Logo Section */}
            <div className="mb-4"> {/* Reduced margin-bottom */}
              <Image
                src="/log.png"
                alt="presale coin Logo"
                width={200} 
                height={200}
                className="rounded-full drop-shadow-[0_0_8px_rgba(255,58,140,0.5)]"
              />
            </div>
            {/* Navigation Buttons */}
            <nav className="flex flex-col relative bottom-10 font-bold animate-pulse items-center space-y-3"> {/* Reduced space-y-5 to space-y-3 */}
              {[
                { name: "Home", id: "home" },
                { name: "Burning Vesting", id: "burning-vesting" },
                { name: "Whitepaper", id: "whitepaper" },
                { name: "FAQs", id: "faqs" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false); // Close menu after navigation
                  }}
                  className="text-[#E6E7FF] hover:text-[#FF3A8C] font-bold transition-colors duration-300"
                  style={{ textShadow: "1px 1px 0 #000" }}
                >
                  {item.name}
                </button>
              ))}
            </nav>
            {/* Social Media Links */}
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://en.wikipedia.org/wiki/presale coin_the_Cowardly_Dog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/usa.png"
                  alt="usa"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/twitter.png"
                  alt="Twitter"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </a>
              <a
                href="https://t.me/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/telegram.png"
                  alt="Telegram"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}