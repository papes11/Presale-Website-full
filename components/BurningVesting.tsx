"use client";
import React, { useState } from "react";
import Image from "next/image";

const burningItems = [
  {
    title: "15-Hour Burning 🔥",
    description:
      'Within the first 15 hours, a portion of the allocated tokens is permanently burned,removing them from circulation. This immediate reduction in supply sets the foundation for scarcity and prevents early large token dumps that can negatively impact the market. By initiating the burn early, we establish a strong deflationary start, ensuring that only the most committed participants remain engaged.',
    image: "/burn.png", // Ensure this image exists in /public
  },
  {
    title: "15-Day Burning 🔥🔥",
    description:
      'Over the next 15 days, an additional percentage of tokens undergoes systematic burning. Unlike traditional vesting schedules where tokens are slowly unlocked, this phase continues to tighten the supply while maintaining market stability. The gradual reduction in supply enhances confidence among holders and minimizes unnecessary market fluctuations.',
    image: "/burn.png", // Ensure this image exists in /public
  },
  {
    title: "15-Month Burning 🔥🔥🔥",
    description: "The final phase executes a long-term burn over a 15-month period, further decreasing token availability. This ensures a sustainable and prolonged deflationary effect, driving organic demand and preventing inflationary pressure. The extended burning process aligns with long-term ecosystem growth, rewarding dedicated holders and ensuring the token remains scarce over time.",
    image: "/burn.png", // Ensure this image exists in /public
  },
];

export const BurningVesting = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Next Button
  const handleNext = () => {
    console.log("Next button clicked"); // Debugging
    setCurrentIndex((prevIndex) => (prevIndex + 1) % burningItems.length);
  };

  // Handle Previous Button
  const handlePrev = () => {
    console.log("Previous button clicked"); // Debugging
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + burningItems.length) % burningItems.length
    );
  };

  return (
    <section
      id="burning-vesting"
      className="relative z-10 px-4 py-10 mx-auto max-w-7xl"
    >
      {/* Title & Description */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-ghost-pink animate-pulse sm:text-4xl"
        style={{ textShadow: "1px 1px 0 #000, 0 0 10px #E6E7FF" }}>
        Vesting Burn
        </h2>
        <p className="mt-4 text-lg text-white animate-pulse font-bold shadow-black ">
          A Revolutionary Vesting Mechanism This is the first-ever project to
          introduce burning as a vesting period, redefining traditional vesting
          models. Unlike conventional vesting, where tokens are gradually
          released over time, our mechanism systematically burns tokens
          instead.Our innovative burning mechanism ensures token scarcity,
          driving long-term value.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8 mt-12 items-center">
        {/* Swipe Card with reduced width */}
        <div className="relative bg-[#2A2B35] rounded-[2rem] p-6 border-4 border-black shadow-[4px_4px_0_0_#000] w-full md:w-1/2 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent animate-pulse" />
          <div className="relative text-center transition-all duration-300 ease-in-out">
            {burningItems[currentIndex] ? (
              <>
                <h2
                  className="text-2xl font-black text-[#E6E7FF] mt-4"
                  style={{ textShadow: "2px 2px 0 #000, 0 0 15px #E6E7FF" }}
                >
                  {burningItems[currentIndex].title}
                </h2>
                <p className="text-lg font-bold text-[#E6E7FF] mt-4">
                  {burningItems[currentIndex].description}
                </p>
              </>
            ) : (
              <p className="text-lg text-red-500">Error loading content</p>
            )}
          </div>
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              className="bg-[#FF3A8C] hover:bg-[#FF1493] text-white rounded-full px-4 py-2 transition-all duration-300 ease-in-out"
              style={{ zIndex: 10, position: "relative" }} // Ensure buttons are clickable
            >
              ← Prev
            </button>
            <button
              onClick={handleNext}
              className="bg-[#FF3A8C] hover:bg-[#FF1493] text-white rounded-full px-4 py-2 transition-all duration-300 ease-in-out"
              style={{ zIndex: 10, position: "relative" }} // Ensure buttons are clickable
            >
              Next →
            </button>
          </div>
        </div>

        {/* Side Image */}
        <div
          className="w-full md:w-1/3 relative flex justify-center items-center"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {burningItems[currentIndex] && (
            <Image
              src={burningItems[currentIndex].image}
              alt="Burning Image"
              width={500}
              height={500}
              className="rounded-[2rem] border-4 border-black shadow-[4px_4px_0_0_#000] transition-all duration-300 ease-in-out"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
};
