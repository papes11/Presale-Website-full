import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { ToastOptions } from "react-toastify";

export const TARGET_AMOUNT = 1000000; // $1 million target
export const WALLET_ADDRESS = "5tAGt4aFT9Eqom5DJKht3uJUsYkVq5FHHy2mrRmiFcXy";

export interface PaymentMethod {
  name: string;
  src: string;
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  { name: "", src: "/solana.png" },
  { name: "USDT", src: "/usdt.png" },
  { name: "VISA", src: "/usdc.png" },
  { name: "Mastercard", src: "/jup.png" },
];

export const toastConfig: ToastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const getSolPrice = async (): Promise<number> => {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd");
      const data = await response.json();
      return data.solana.usd; // Get the SOL price in USD
    } catch (error) {
      console.error("Error fetching SOL price:", error);
      return 100; // Default price if error occurs
    }
  };
  
  export const handleWalletBalance = async (
    setRaisedAmount: (amount: number) => void,
    setProgressPercentage: (percentage: number) => void
  ): Promise<void> => {
    try {
      const connection = new Connection("https://api.devnet.solana.com");
      const publicKey = new PublicKey(WALLET_ADDRESS);
      const balance = await connection.getBalance(publicKey);
      const solBalance = balance / LAMPORTS_PER_SOL;
  
      // Fetch the live price of SOL
      const solPrice = await getSolPrice();
  
      // Calculate USD value
      const usdValue = solBalance * solPrice;
      setRaisedAmount(usdValue);
  
      // Calculate progress percentage
      const percentage = (usdValue / TARGET_AMOUNT) * 100;
      setProgressPercentage(Math.min(percentage, 100));
  
      // Fetch SOL price every 1 minute (60,000 ms)
      setInterval(async () => {
        const updatedSolPrice = await getSolPrice();
        const updatedUsdValue = solBalance * updatedSolPrice;
        setRaisedAmount(updatedUsdValue);
  
        const updatedPercentage = (updatedUsdValue / TARGET_AMOUNT) * 100;
        setProgressPercentage(Math.min(updatedPercentage, 100));
      }, 60000); // 60000 ms = 1 minute
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

export const handleTransaction = async (
  amount: string,
  wallet: WalletContextState,
  setIsLoading: (loading: boolean) => void,
  onSuccess: () => void,
  onError: (message: string) => void
): Promise<void> => {
  if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
    onError("Please enter a valid amount");
    return;
  }

  setIsLoading(true);
  try {
    const connection = new Connection("https://api.devnet.solana.com");
    const toPublicKey = new PublicKey(WALLET_ADDRESS);
    const lamports = Math.round(Number(amount) * LAMPORTS_PER_SOL);

    if (!wallet.publicKey) {
      onError("Wallet not connected");
      setIsLoading(false);
      return;
    }

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: toPublicKey,
        lamports,
      })
    );

    const signature = await wallet.sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature, "processed");
    onSuccess();
  } catch (error) {
    console.error("Transaction failed", error);
    onError("Transaction failed. Please try again.");
  } finally {
    setIsLoading(false);
  }
};