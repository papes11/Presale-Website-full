"use client";

import React, { useState } from "react";

const faqItems = [
  {
    question: "Why Choose Burning Instead of Traditional Vesting?",
    answer:
      "🔸 Scarcity-Driven Growth – As supply decreases, the remaining tokens become more valuable, benefiting long-term holders.\n" +
      "🔸 Prevents Dumping – Unlike traditional vesting, where unlocked tokens flood the market, our burning mechanism removes them entirely.\n" +
      "🔸 Market Stability – A controlled burn over time ensures a more predictable and stable token economy.\n" +
      "🔸 Investor Confidence – Knowing that tokens are being burned rather than distributed fosters trust and long-term commitment.\n" +
      "This first-of-its-kind burning-based vesting mechanism redefines how tokenomics should work, ensuring a more sustainable and value-driven ecosystem for all participants. 🚀🔥",
  },
  {
    question: "How do I see the tokens in my wallet?",
    answer:
      "To view your tokens, follow these steps:Participate in the presale by connecting your Solana wallet.Copy your wallet address or send SOL directly. The minimum purchase is $1 USD.Once the presale ends wait for 15 minute, your tokens will be visible in your wallet automatically."
  },
  {
    question: "What is courage ($CDOG)?",
    answer:
    '$CDOG is the first-ever memecoin that combines burning as a vesting mechanism! Instead of unlocking tokens over time, we burn them, ensuring scarcity, stability, and long-term value. This revolutionary approach makes $CDOG deflationary, driving price action while keeping the ecosystem strong. 🚀🔥'

  },
  {
    question: "How does the presale work?",
    answer:
      "Buy during the presale—it's simple, just grab some $CDOG! No need to worry—once we launch, your tokens will be automatically available.Sit back and relax—when $CDOG hits the market, it’s shopping time!We’re aiming for 1 billion courageously! Get in early and be part of history. 🐶💰🚀"
  },
];

export const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="relative z-10 px-4 py-10 mx-auto max-w-7xl"
    >
      <div className="text-center">
      <h2 className="text-3xl font-bold text-ghost-pink animate-pulse sm:text-4xl"
        style={{ textShadow: "1px 1px 0 #000, 0 0 10px #E6E7FF" }}>
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg  text-white animate-pulse font-bold shadow-black">
          Find answers to commonly asked questions about our platform.
        </p>
      </div>

      <div className="space-y-4 mt-12">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#2A2B35] rounded-[2rem] p-6 border-4 border-black shadow-[4px_4px_0_0_#000] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex justify-between items-center">
              <h3
                className="text-xl font-bold text-[#E6E7FF]"
                style={{ textShadow: "2px 2px 0 #000, 0 0 15px #E6E7FF" }}
              >
                {item.question}
              </h3>
              <span className="text-[#FF3A8C] text-2xl">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="text-lg font-bold text-[#E6E7FF] mt-4 whitespace-pre-line">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};