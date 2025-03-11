"use client";
import React, { useState } from "react";
import { Ghost, Zap, Shield, Coins } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Ghost,
    title: "Spooky Tokenomics",
    description:
      "Delve into the haunted tokenomics that power our project. The mysterious structure ensures sustainable growth and a steady flow of transactions.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Transactions SOLANA",
    description:
      "Experience transactions at the speed of light with the SOLANA network, ensuring near-instant confirmation and a seamless user experience.",
  },
  {
    icon: Shield,
    title: "Haunted COMMUNITY",
    description:
      "Join our ever-growing, engaged community of like-minded individuals dedicated to the future of digital currency and blockchain.",
  },
  {
    icon: Coins,
    title: "Spectral TEAM",
    description:
      "A group of experienced professionals driving innovation and pushing boundaries to bring you the most secure and decentralized solution.",
  },
];

export function FeatureSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content: string) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  return (
    <section
      id="features"
      className="py-16 relative overflow-hidden bg-[#FFE4B5]/30"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFE4B5]/50 to-[#FFE4B5]" />
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <h2
          className="text-4xl font-black text-ghost-dark text-center mb-12"
          style={{ textShadow: "2px 2px 0 rgba(255,255,255,0.5)" }}
        >
          Unleash the Power of presale coin
        </h2>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#2A2B35] rounded-[2rem] p-6 border-4 border-black shadow-[4px_4px_0_0_#000] relative overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Ghostly Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent animate-pulse" />
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-ghost-pink rounded-full mb-4 mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              {/* Title and Description */}
              <div className="flex flex-col items-center justify-between">
                <h3
                  className="text-xl font-bold text-[#E6E7FF] text-center mb-2"
                  style={{ textShadow: "1px 1px 0 #000, 0 0 15px #E6E7FF" }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Learn More Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-ghost-dark mb-6">
            Learn More
          </h3>
          <div className="flex items-center justify-center space-x-4 mb-4">
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
          <div className="space-x-4">
            <button
              onClick={() => openModal("terms")}
              className="text-ghost-dark hover:text-ghost-pink transition-colors duration-300"
            >
              Terms of Service
            </button>
            <button
              onClick={() => openModal("privacy")}
              className="text-ghost-dark hover:text-ghost-pink transition-colors duration-300"
            >
              Privacy Policy
            </button>
          </div>
        </div>
        {/* Disclaimer */}
        <div className="mt-8 text-center text-sm text-ghost-dark">
          <p>
            Disclaimer: Cryptocurrency may be unregulated in your jurisdiction.
            The value of cryptocurrencies may fluctuate. Profits may be subject
            to capital gains or other taxes applicable in your jurisdiction.
          </p>
          <p className="mt-2">©presale coin memedog 2025 all rights reserved</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-auto overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: "90vh" }}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {modalContent === "terms" ? "Terms of Service" : "Privacy Policy"}
            </h2>
            <div className="text-gray-700 p-4 space-y-6">
              {modalContent === "terms" ? (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Terms of Service
                  </h2>

                  <p className="font-medium text-xl">INTRODUCTION</p>
                  <p className="mb-4">
                    Welcome to the presale coin website and platform ("we," "us," or
                    "our"). By accessing or using our website, services, or
                    purchasing presale coin tokens, you agree to comply with and be
                    bound by these Terms of Service ("Terms"). Please read these
                    Terms carefully before using our services. If you do not
                    agree with these Terms, you must discontinue use of our
                    platform immediately.
                  </p>

                  <p className="font-medium text-xl">1. ELIGIBILITY</p>
                  <p className="mb-4">
                    You must be at least 18 years old to use our services or
                    purchase presale coin tokens. By accessing our services, you
                    confirm that you are not a citizen, resident, or entity of
                    any restricted country or jurisdiction where the use or
                    purchase of presale coin is prohibited by law.
                  </p>

                  <p className="font-medium text-xl">
                    2. Nature of presale coin Tokens
                  </p>
                  <p className="mb-4">
                    presale coin tokens are experimental memecoin intended for
                    entertainment purposes only. They are not considered
                    financial instruments, securities, or investments. presale coin
                    tokens are not guaranteed to hold any intrinsic value, be
                    resellable, or tradable on any market. The purchase and use
                    of presale coin are solely at your own risk.
                  </p>

                  <p className="font-medium text-xl">3. Risks</p>
                  <p className="mb-4">
                    By purchasing or using presale coin tokens, you acknowledge the
                    inherent risks associated with cryptocurrencies, including
                    but not limited to:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Market volatility and price fluctuations.</li>
                      <li>
                        Potential loss of access to tokens due to errors (e.g.,
                        lost private keys).
                      </li>
                      <li>
                        Regulatory changes that may impact the legality or use
                        of presale coin.
                      </li>
                      <li>
                        Security vulnerabilities, hacks, or other technical
                        issues.
                      </li>
                    </ul>
                  </p>

                  <p className="font-medium text-xl">
                    4. Prohibited Activities
                  </p>
                  <p className="mb-4">
                    You agree not to engage in the following prohibited
                    activities:
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        Using our platform or services for illegal or
                        unauthorized purposes.
                      </li>
                      <li>
                        Attempting to hack, exploit, or compromise the security
                        of the platform.
                      </li>
                      <li>
                        Misrepresenting your identity or providing false
                        information during transactions.
                      </li>
                      <li>
                        Violating any applicable laws or regulations in your
                        jurisdiction.
                      </li>
                    </ul>
                  </p>

                  <p className="font-medium text-xl">5. Presale Terms</p>
                  <p className="mb-4">
                    The 15-hour presale coin presale operates under a dynamic pricing
                    model, where token prices increase at every stage. Unsold
                    tokens at the end of the presale will be burned to ensure
                    scarcity and value for existing holders. All purchases
                    during the presale are final and nonrefundable.
                  </p>

                  <p className="font-medium text-xl">
                    6. Intellectual Property
                  </p>
                  <p className="mb-4">
                    All content on the presale coin website, including logos,
                    graphics, text, and software, is the property of presale coin or
                    its licensors and is protected by copyright and trademark
                    laws. You may not reproduce, modify, distribute, or use any
                    content without our prior written consent.
                  </p>

                  <p className="font-medium text-xl">
                    7. Limitation of Liability
                  </p>
                  <p className="mb-4">
                    To the maximum extent permitted by law, we shall not be
                    liable for any damages, including but not limited to:
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        Losses incurred from the purchase or use of presale coin
                        tokens.
                      </li>
                      <li>
                        Inability to access or use the platform due to technical
                        issues.
                      </li>
                      <li>Unauthorized access, hacks, or security breaches.</li>
                    </ul>
                  </p>

                  <p className="font-medium text-xl">8. Updates to Terms</p>
                  <p className="mb-4">
                    We reserve the right to modify or update these Terms at any
                    time. Changes will be posted on our website with the
                    "Effective Date" updated accordingly. By continuing to use
                    our services after changes are posted, you agree to the
                    updated Terms.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Privacy Policy
                  </h2>

                  <p className="font-medium text-xl">
                    1. Information We Collect
                  </p>
                  <p className="mb-4">
                    <strong>Information You Provide:</strong> We may collect
                    personal information that you voluntarily provide to us
                    when:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Creating an account or profile.</li>
                      <li>Participating in the presale coin presale.</li>
                      <li>Subscribing to our updates or newsletters.</li>
                      <li>Contacting our support team.</li>
                    </ul>
                  </p>

                  <p className="mb-4">
                    <strong>Collected Information:</strong> When
                    you access our website, we may automatically collect certain
                    information, including:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Your IP address.</li>
                      <li>Browser type and version.</li>
                      <li>Device information.</li>
                      <li>Pages visited and time spent on our website.</li>
                      <li>Referring URL or source.</li>
                    </ul>
                  </p>

                  <p className="font-medium text-xl">
                    2. How We Use Your Information
                  </p>
                  <p className="mb-4">
                    We use the information we collect to:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Process transactions and provide services.</li>
                      <li>
                        Communicate with you about updates, news, and
                        promotional content.
                      </li>
                      <li>
                        Improve and personalize your experience on our platform.
                      </li>
                      <li>
                        Monitor and analyze usage patterns to optimize our
                        website.
                      </li>
                      <li>
                        Ensure compliance with legal obligations and prevent
                        fraud or misuse.
                      </li>
                    </ul>
                  </p>

                  <p className="font-medium text-xl">
                    3. Sharing Your Information
                  </p>
                  <p className="mb-4">
                    We do not sell or rent your personal information. However,
                    we may share your data with:
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        Service Providers - Third-party service providers who
                        assist us in operating our platform, processing
                        transactions, or delivering communications.
                      </li>
                      <li>
                        Legal Obligations - We may disclose your information if
                        required to comply with applicable laws, regulations, or
                        legal processes.
                      </li>
                      <li>
                        Business Transfers - In the event of a merger,
                        acquisition, or sale of our assets, your information may
                        be transferred to the new entity.
                      </li>
                    </ul>
                  </p>

                  <p className="font-medium text-xl">4. Data Security</p>
                  <p className="mb-4">
                    We implement industry-standard measures to protect your data
                    from unauthorized access, alteration, disclosure, or
                    destruction. However, no method of transmission or storage
                    is 100% secure, and we cannot guarantee absolute security.
                  </p>

                  <p className="font-medium text-xl">5. Your Rights</p>
                  <p className="mb-4">
                    <strong>Access and Correction:</strong> You have the right
                    to access and request corrections to inaccurate or
                    incomplete information.
                    <strong>Deletion:</strong> You can request that we delete
                    your personal information, subject to any legal obligations.
                  </p>

                  <p className="font-medium text-xl">6. Retention of Data</p>
                  <p className="mb-4">
                    We retain your personal information only as long as
                    necessary to fulfill the purposes outlined in this Privacy
                    Policy.
                  </p>

                  <p className="font-medium text-xl">7. Third Party Links</p>
                  <p className="mb-4">
                    Our website may contain links to third-party websites or
                    services. We are not responsible for the privacy practices
                    of these third parties.
                  </p>

                  <p className="font-medium text-xl">
                    8. Changes to This Privacy Policy
                  </p>
                  <p className="mb-4">
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or applicable laws. The
                    "Effective Date" at the top of this policy indicates when
                    the latest revisions were made.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
