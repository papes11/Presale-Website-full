import { Ghost, Zap, Shield, Coins } from "lucide-react"

const features = [
  {
    icon: Ghost,
    title: "Spooky Tokenomics",
    description: "Delve into the haunted tokenomics that power our project. The mysterious structure ensures sustainable growth and a steady flow of transactions.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Transactions SOLANA",
    description: "Experience transactions at the speed of light with the SOLANA network, ensuring near-instant confirmation and a seamless user experience.",
  },
  {
    icon: Shield,
    title: "Haunted COMMUNITY",
    description: "Join our ever-growing, engaged community of like-minded individuals dedicated to the future of digital currency and blockchain.",
  },
  {
    icon: Coins,
    title: "Spectral TEAM",
    description: "A group of experienced professionals driving innovation and pushing boundaries to bring you the most secure and decentralized solution.",
  },
]

export function loru() {
  return (
    <section className="py-16 relative overflow-hidden bg-[#FFE4B5]/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFE4B5]/50 to-[#FFE4B5]" />
      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="text-4xl font-black text-ghost-dark text-center mb-12"
          style={{ textShadow: "2px 2px 0 rgba(255,255,255,0.5)" }}
        >
          Unleash the Power of COURAGE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border-2 border-ghost-pink 
                          shadow-[0_0_15px_rgba(255,58,140,0.3)] transform hover:scale-105 
z                          transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-ghost-pink rounded-full mb-4 mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col items-center justify-between">
                <h3
                  className="text-xl font-bold text-ghost-dark text-center mb-2"
                  style={{ textShadow: "1px 1px 0 rgba(255,255,255,0.5)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-ghost-dark/80 text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-ghost-dark mb-6">Learn More</h3>
          <div className="space-x-4">
            <a href="/whitepaper" className="text-ghost-dark hover:text-ghost-pink">Whitepaper</a>
            <a href="/security" className="text-ghost-dark hover:text-ghost-pink">Security</a>
            <a href="/terms" className="text-ghost-dark hover:text-ghost-pink">Terms of Service</a>
            <a href="/privacy" className="text-ghost-dark hover:text-ghost-pink">Privacy Policy</a>
            <a href="/faq" className="text-ghost-dark hover:text-ghost-pink">FAQ</a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-ghost-dark">
          <p>
            Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may fluctuate. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
          </p>
          <p className="mt-2">©Courage 2025 all rights reserved</p>
        </div>
      </div>
    </section>
  )
}
