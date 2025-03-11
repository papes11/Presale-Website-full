import Image from "next/image";
import { PresaleCard } from "./presale-card";

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Farm background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/back.jpg"
          alt="Farm Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>
      {/* Animated mist effect */}
      <div className="absolute inset-0 opacity-20 animate-pulse">
        <div className="absolute inset-0 bg-gradient-radial from-ghost-pink/20 to-transparent" />
      </div>
      <div className="container relative z-10 grid lg:grid-cols-2 gap-8 py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h1 className="space-y-2">
            <span
              className="block text-6xl sm:text-7xl md:text-8xl font-black text-ghost-black animate-pulse"
              style={{ textShadow: "4px 4px 0 #000, 0 0 20px #FF3A8C" }}
            >
              presale coin
            </span>
            <div className="space-y-1">
              <p
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90"
                style={{ textShadow: "2px 2px 0 #000" }}
              >
                The cowardy
              </p>
              <p
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white"
                style={{ textShadow: "4px 4px 0 #000, 0 0 30px #E6E7FF" }}
              >
                MEMEDOG
              </p>
            </div>
          </h1>
          <div className="relative h-[300px] sm:h-[400px] mt-8">
            <div className="absolute inset-0 bg-gradient-radial from-ghost-pink/30 to-transparent animate-pulse" />
            <Image
              src="/back.jpg"
              alt="presale coin Characters"
              fill
              className="object-contain drop-shadow-[0_0_10px_rgba(255,58,140,0.5)]"
              priority
            />
          </div>
        </div>
        <div className="flex justify-center items-start pt-12">
          <PresaleCard />
        </div>
      </div>
      <div className="container relative z-10 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block px-8 sm:px-12 py-3 bg-white/90 backdrop-blur-sm rounded-full text-lg sm:text-xl font-bold border-4 border-black shadow-[4px_4px_0_0_#000] text-ghost-dark">
            FEATURED IN
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 mt-8">
            {[
              { name: "CryptoDaily", src: "/fe.png" },
              { name: "Analytics Insight", src: "/fe2.png" },
              { name: "CoinPedia", src: "/e3.png" },
              { name: "ZyCrypto", src: "/fe4.png" },
            ].map((partner) => (
              <div
                key={partner.name}
                className="relative group transition-transform hover:scale-105 bg-white/90 backdrop-blur-sm p-2 rounded-lg w-32 sm:w-40"
              >
                <Image
                  src={partner.src || "/ru.png"}
                  alt={partner.name}
                  width={160}
                  height={40}
                  className="opacity-80 group-hover:opacity-100 transition-opacity object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}