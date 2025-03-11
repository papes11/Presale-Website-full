"use client";
import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  content: string;
  imageSrc: string; // Image for the card
  reverse?: boolean; // Optional: Reverse layout (image on the right)
}

const Card: React.FC<CardProps> = ({ title, content, imageSrc, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row bg-[#2A2B35] rounded-[2rem] p-6 border-4 border-black shadow-[4px_4px_0_0_#000] relative overflow-hidden ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Ghostly glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent animate-pulse" />

      {/* Image Side */}
      <div className="relative w-full md:w-1/2">
        <Image
          src={imageSrc}
          alt="Card Image"
          width={400}
          height={400}
          className="rounded-lg border-2 border-black drop-shadow-[0_0_8px_rgba(255,58,140,0.5)] mx-auto"
        />
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6 text-center md:text-left">
        <h2
          className="text-2xl font-black text-[#E6E7FF] mt-4"
          style={{ textShadow: "2px 2px 0 #000, 0 0 15px #E6E7FF" }}
        >
          {title}
        </h2>
        <p className="text-lg font-bold text-[#E6E7FF] mt-4">{content}</p>
        <p
          className="text-xl font-black text-[#FF3A8C] animate-pulse mt-2"
          style={{ textShadow: "1px 1px 0 #000, 0 0 15px #FF3A8C" }}
        >
          Glowing Effects
        </p>
      </div>
    </div>
  );
};

export default Card;