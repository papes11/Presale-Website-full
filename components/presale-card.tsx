"use client";
import { usePresaleLogic } from "@/components/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useWallet } from "@solana/wallet-adapter-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  PAYMENT_METHODS,
  WALLET_ADDRESS,
  handleWalletBalance,
  handleTransaction,
  toastConfig,
} from "./wallet";

export function PresaleCard(): JSX.Element {
  const wallet = useWallet();
  const { connected } = wallet;
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [raisedAmount, setRaisedAmount] = useState<number>(0);
  const [progressPercentage, setProgressPercentage] = useState<number>(0);
  const { timeLeft, isPresaleEnded, currentStage, currentPrice } =
    usePresaleLogic();

  // Effect for wallet balance updates
  useEffect(() => {
    handleWalletBalance(setRaisedAmount, setProgressPercentage); // Initial fetch
    const balanceInterval = setInterval(() => {
      handleWalletBalance(setRaisedAmount, setProgressPercentage);
    }, 60000); // Update every minute
    return () => clearInterval(balanceInterval);
  }, []);

  const handleCopyClick = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(WALLET_ADDRESS);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy address:", error);
    }
  };

  const handleWalletNotConnected = (): void => {
    toast.error("Please connect your wallet first", toastConfig);
  };

  const handleBuyNow = async (): Promise<void> => {
    await handleTransaction(
      amount,
      wallet,
      setIsLoading,
      () => {
        toast.success("Transaction successful!", toastConfig);
        handleWalletBalance(setRaisedAmount, setProgressPercentage);
      },
      (message) => toast.error(message, toastConfig)
    );
  };

  return (
    <div className="bg-[#2A2B35] rounded-[2rem] p-6 border-4 border-black shadow-[4px_4px_0_0_#000] relative overflow-hidden sm:p-4">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent animate-pulse" />
      <div className="relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Image
            src="/ru.png"
            alt="presale coin Logo"
            width={40}
            height={40}
            className="rounded-full border-2 border-black drop-shadow-[0_0_8px_rgba(255,58,140,0.5)] sm:w-8 sm:h-8"
          />
          <h2
            className="text-2xl font-black text-[#E6E7FF] sm:text-lg"
            style={{ textShadow: "2px 2px 0 #000, 0 0 15px #E6E7FF" }}
          >
            {isPresaleEnded ? "PRESALE ENDED" : "PRESALE ENDING IN"}
          </h2>
        </div>

        {/* Countdown Timer */}
        <div className="flex gap-10 ml-5 mb-8 flex-wrap justify-center">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div
              key={key}
              className="bg-[#1A1B25] rounded-xl p-3 text-center border-4 border-[#FF3A8C] shadow-[2px_2px_0_0_#000] relative overflow-hidden sm:w-20 sm:p-2"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF3A8C]/10 to-transparent" />
              <div className="relative">
                <div
                  className="text-4xl font-black text-[#FF3A8C] animate-pulse sm:text-2xl"
                  style={{ textShadow: "2px 2px 0 #000, 0 0 10px #FF3A8C" }}
                >
                  {value}
                </div>
                <div className="text-sm font-bold capitalize text-[#E6E7FF] sm:text-xs">
                  {key}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buy Now Section */}
        <div className="text-center mb-6">
          <p className="text-lg font-bold text-[#E6E7FF] sm:text-sm">
            Buy now before it hits
          </p>
          <p
            className="text-2xl font-black text-[#FF3A8C] sm:text-lg"
            style={{ textShadow: "1px 1px 0 #000, 0 0 15px #FF3A8C" }}
          >
            Major Exchanges
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm font-bold mb-2 text-[#E6E7FF] sm:flex-col sm:items-start">
              <span>Stage {currentStage}/15</span>
              <span>{progressPercentage.toFixed(2)}% of the target raised</span>
            </div>
            <div className="h-8 w-full bg-[#1A1B25] rounded-full border-4 border-black p-1 sm:h-6">
              <div
                className="h-full bg-[#FF3A8C] rounded-full shadow-[0_0_10px_#FF3A8C] transition-all duration-1000"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Raised Amount */}
          <div className="text-center space-y-2">
            <p className="font-black text-xl text-[#E6E7FF] sm:text-lg">
              RAISED: $
              {raisedAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <div className="text-sm font-bold text-[#8A8B96] flex items-center justify-center gap-1">
              <span>Current Price: ${currentPrice.toFixed(3)}</span>
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.7.3l5 5a1 1 0 11-1.4 1.4L11 6.41V17a1 1 0 11-2 0V6.41L5.7 9.7a1 1 0 11-1.4-1.4l5-5A1 1 0 0110 3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="font-black text-xl text-[#FF3A8C] sm:text-lg">
              Listing Price: $0.026
            </p>
          </div>

          {/* Input and Buttons */}
          <div className="flex items-center gap-2">
            {connected ? (
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount in SOL"
                className="w-full h-12 bg-[#40C1E3] text-white text-lg font-black rounded-xl border-4 border-black shadow-[4px_4px_0_0_#000] px-4 sm:h-10 sm:text-sm"
              />
            ) : (
              <Button
                onClick={handleWalletNotConnected}
                className="w-full h-12 bg-[#40C1E3] hover:bg-[#35ea56] text-white text-lg font-black rounded-xl border-4 border-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] relative overflow-hidden group sm:h-10 sm:text-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 group-hover:translate-x-full duration-700 transition-transform" />
                <span className="relative">SEND SOLANA ON➡️</span>
              </Button>
            )}
            <Button
              onClick={handleCopyClick}
              className="w-12 h-12 bg-[#40C1E3] hover:bg-[#35ea56] text-white text-lg font-black rounded-xl border-4 border-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] relative overflow-hidden group sm:w-10 sm:h-10 sm:text-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 group-hover:translate-x-full duration-700 transition-transform" />
              <span className="relative">{isCopied ? "✅" : "📋"}</span>
            </Button>
          </div>

          {/* Buy Now Button */}
          {connected ? (
            <Button
              onClick={handleBuyNow}
              disabled={isLoading}
              className="w-full h-12 bg-[#40C1E3] hover:bg-[#35ea56] text-white text-lg font-black rounded-xl border-4 border-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] relative overflow-hidden group sm:h-10 sm:text-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 group-hover:translate-x-full duration-700 transition-transform" />
              <span className="relative">
                {isLoading ? "Processing..." : "Buy Now"}
              </span>
            </Button>
          ) : (
            <Button
              onClick={handleWalletNotConnected}
              className="w-full h-12 bg-[#40C1E3] hover:bg-[#35ea56] text-white text-lg font-black rounded-xl border-4 border-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] relative overflow-hidden group sm:h-10 sm:text-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 group-hover:translate-x-full duration-700 transition-transform" />
              <span className="relative">Buy presale coin</span>
            </Button>
          )}

          {/* Payment Methods */}
          <div className="flex justify-center items-center gap-3 pt-2 flex-wrap">
            <span className="text-sm font-bold text-[#8A8B96] sm:text-xs">
              Accepted:
            </span>
            <div className="flex gap-2">
              {PAYMENT_METHODS.map((payment) => (
                <div
                  key={payment.name}
                  className="w-8 h-8 rounded-full border-2 border-black shadow-[1px_1px_0_0_#000] overflow-hidden bg-[#1A1B25] sm:w-6 sm:h-6"
                >
                  <Image
                    src={payment.src}
                    alt={payment.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity sm:w-6 sm:h-6"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
