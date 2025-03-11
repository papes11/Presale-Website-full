import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import Image from "next/image";
import { BurningVesting } from "@/components/BurningVesting";
import  { Whitepaper} from "@/components/WhitePaper";
import Team from "@/components/Team";
import {FAQs} from "@/components/FAQ";

export default function Home() {
  return (
    <div className="relative min-h-screen pt-24 overflow-hidden">
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

      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section id="home" className="relative z-10">
          <HeroSection />
        </section>
        {/* Burning Vesting Section */}
        <section id="burn-vesting" className="relative z-10">
          <BurningVesting />
        </section>
        {/* Whitepaper Section */}
        <section id="whitepaper" className="relative z-10">
          <Whitepaper />
        </section>
        {/* FAQs Section */}
        <section id="faqs" className="relative z-10">
          <FAQs />
        </section>
        {/* Team Section */}
        <section id="team" className="relative z-10">
          <Team />
        </section>
        {/* Feature Section */}
        <FeatureSection />

        <div className="fixed bottom-0 left-0 w-40 h-40 transform hover:scale-110 transition-transform">
          <Image
            src="/ru.png"
            alt="Screaming Panda"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>
        <div className="fixed bottom-0 right-0 w-40 h-40 transform hover:scale-110 transition-transform">
          <Image
            src="/ru1.png"
            alt="Screaming Panda"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Multiple Pandas */}
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`fixed w-40 h-40 transform hover:scale-110 transition-transform panda-move-${
              index + 1
            }`}
            style={{
              bottom: `${Math.random() * 100}vh`, // Random vertical position
              left: `${Math.random() * 100}vw`, // Random horizontal position
            }}
          >
            <Image
              src={`/ru${index % 2 === 0 ? "" : "1"}.png`} // Alternate between ru.png and ru1.png
              alt={`Screaming Panda ${index + 1}`}
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
        ))}
      </main>
    </div>
  );
}
