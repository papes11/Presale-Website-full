"use client";

import React from "react";
import Image from "next/image";

const whitepaperItems = [
  {
    title: "$CDOG Tokenomics",
    content:
      "Total Supply: 1 Billion $CDOG 🔥\n" +
      "Token Allocation Chart:\n" +
      "Category\tPercentage\n" +
      "Presale & Listing\t40%\n" +
      "Airdrop\t5%\n" +
      "Vesting & Burning\t55%\n" +
      "💡 Over half of the supply will be gradually burned, making $CDOG one of the most scarce and valuable memecoins ever! 🚀🔥",
    image: "/nod.gif", // Main illustration
    chartImage: "/chart.png", // Token allocation chart image
  },
  {
    title: "Roadmap",
    content:
      "$CDOG Roadmap – The Path to 1 Billion Courageously! 🚀🔥\n" +
      "✅ Phase 1: The 15-Hour Presale\n" +
      "Exclusive 15-hour presale for early believers.\n" +
      "Secure your $CDOG tokens before the world catches on!\n" +
      "🚀 Phase 2: The 15 Launch\n" +
      "Official launch on Solana after the presale.\n" +
      "Instant presale distribution within 15 minutes post-launch.\n" +
      "DEX Listings: Raydium, Orca, and Jupiter.\n" +
      "📈 Phase 3: CEX Listings & Expansion\n" +
      "CEX Listings on top-tier exchanges like Gate.io, MEXC, and KuCoin.\n" +
      "Growing the $CDOG ecosystem with community events and rewards.\n" +
      "Strengthening partnerships and integrations within the Solana ecosystem.\n" +
      "This is just the beginning—$CDOG is here to burn, rise, and conquer! 🚀🔥🐶",
    image: "/nod.gif",
  },
  {
    title: "Implementation",
    content:
      "Vesting Burn Implementation: A Revolutionary Approach 🔥🚀\n" +
      "Traditional vesting releases tokens over time, but $CDOG is changing the game by introducing vesting through burning—the first project to implement this model. Instead of unlocking tokens gradually, we permanently remove them from circulation, ensuring scarcity and long-term value.\n" +
      "Why Vesting Burn?\n" +
      "🔥 Prevents Dumps – No unlocked tokens flooding the market.\n" +
      "🔥 Increases Scarcity – Fewer tokens available over time.\n" +
      "🔥 Boosts Long-Term Growth – Ensures steady price appreciation.\n" +
      "This innovative deflationary vesting model makes $CDOG one of the most valuable and sustainable memecoins on Solana! 🐶🔥🚀",
    image: "/key.gif",
  },
];

export const Whitepaper = () => {
  return (
    <section
      id="whitepaper"
      className="relative z-10 px-4 py-10 mx-auto max-w-5xl"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-ghost-pink animate-pulse sm:text-4xl"
        style={{ textShadow: "1px 1px 0 #000, 0 0 10px #E6E7FF" }}>Whitepaper</h2>
        <p className="mt-4 text-lg text-white animate-pulse font-bold shadow-black">
          Dive into the details of our project and learn about our vision.
        </p>
      </div>

      <div className="grid gap-8 mt-12">
        {whitepaperItems.map((item, index) => (
          <article
            key={index}
            className="flex flex-col md:flex-row gap-8 mb-8 items-center"
          >
            {/* Content Box */}
            <div className="bg-[#2A2B35] rounded-[2rem] p-6 border-4 border-black shadow-[4px_4px_0_0_#000] w-full md:w-1/2">
              <h2
                className="text-2xl font-black text-[#E6E7FF] mt-4"
                style={{ textShadow: "2px 2px 0 #000, 0 0 15px #E6E7FF" }}
              >
                {item.title}
              </h2>
              {item.content && (
                <p className="text-lg font-bold text-[#E6E7FF] mt-4 whitespace-pre-line">
                  {item.content}
                </p>
              )}
              {/* Token Allocation Chart Image */}
              {item.chartImage && (
                <div className="mt-4 flex justify-center">
                  <Image
                    src={item.chartImage}
                    alt={`${item.title} Token Allocation Chart`}
                    width={300}
                    height={200}
                    className="rounded-[1rem] border-4 border-black shadow-[4px_4px_0_0_#000]"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
            </div>

            {/* Illustration Image Box */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={item.image}
                alt={`${item.title} Illustration`}
                width={400}
                height={400}
                className="rounded-[2rem] border-4 border-black shadow-[4px_4px_0_0_#000]"
                priority={index === 0} // Load first image eagerly, others lazily
                style={{ objectFit: "cover" }} // Ensures proper scaling
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};