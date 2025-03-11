"use client";
import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Bagge (founder)",
    image: "/bage.png", // Replace with actual image path
  },
  {
    name: "Katz (developer)",
    image: "/katz.png", // Replace with actual image path
  },
  {
    name: "Fred (marketing)",
    image: "/fred.png", // Replace with actual image path
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="relative z-10 py-10 px-4 mx-auto max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-ghost-pink animate-pulse sm:text-4xl"
        style={{ textShadow: "1px 1px 0 #000, 0 0 10px #E6E7FF" }}>Our Team</h2>
        <p className="mt-4 text-lg text-white animate-pulse font-bold shadow-black">
          Meet the talented individuals behind this groundbreaking project.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            {/* Card */}
            <div
              className="bg-[#2A2B35] rounded-[2rem] border-4 border-black shadow-[4px_4px_0_0_#000] relative overflow-hidden"
              style={{ height: "30rem" }} // Fixed height for the card
            >
              {/* Ghostly glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent animate-pulse" />

              {/* Profile Image */}
              <Image
                src={member.image}
                alt={member.name}
                fill // Makes the image fill the entire card
                className="object-contain rounded-[1.8rem]" // Matches the card's rounded corners
              />
            </div>

            {/* Name with Glowing Effect */}
            <h3
              className="text-xl font-black text-[#E6E7FF] mt-4 animate-pulse"
              style={{ textShadow: "2px 2px 0 #000, 0 0 15px #E6E7FF" }}
            >
              {member.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
